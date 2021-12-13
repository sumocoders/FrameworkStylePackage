import { Cookies } from './Cookies'

const cookies = new Cookies()

export class Theme {
  constructor () {
    this.toggler = document.querySelector('[data-theme-toggler]')
    this.logo = document.querySelector('[data-navbar-logo]')
    this.darkLogo = document.querySelector('[data-navbar-logo-dark]')
    this.darkThemePath = document.querySelector('body').dataset.themePath
    this.setThemeCookie()
    this.initEventListeners()
  }

  initEventListeners () {
    this.toggler.addEventListener('click', (event) => { this.handleToggleTheme(event) })
    this.toggler.addEventListener('hide.bs.dropdown', (event) => { this.handleDropdownHiding(event) })
  }

  setThemeCookie () {
    // if cookie is not yet set, get the theme of the device, default light
    if (cookies.readCookie('theme') == null) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        cookies.setCookie('theme', 'dark')
        // set switch toggle checked
        this.toggler.checked = true
      } else {
        cookies.setCookie('theme', 'light')
      }
    }

    // show the theme
    this.showTheme(cookies.readCookie('theme'))
  }

  handleToggleTheme (event) {
    // set new theme
    let themeToBe = 'light'
    if (this.toggler.checked) {
      themeToBe = 'dark'
    }

    // set cookie
    cookies.setCookie('theme', themeToBe)

    // show the theme
    this.showTheme(themeToBe)
  }

  showTheme (themeToBe) {
    if (themeToBe === 'dark') {
      this.addDarkStyleLinkToHead()
      this.darkLogo.classList.remove('d-none')
      this.logo.classList.add('d-none')
    } else {
      this.removeDarkStyleLinkFromHead()
      this.darkLogo.classList.add('d-none')
      this.logo.classList.remove('d-none')
    }
  }

  addDarkStyleLinkToHead () {
    const link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = this.darkThemePath
    link.dataset.role = 'dark-style-link'
    document.querySelector('head').appendChild(link)
  }

  removeDarkStyleLinkFromHead () {
    const link = document.querySelector('[data-role="dark-style-link"]')
    if (link !== null) {
      link.remove()
    }
  }

  handleDropdownHiding (event) {
    // do not close dropdown when toggle is clicked
    if ($(e.clickEvent).length && $(e.clickEvent.target).parents('[data-theme-toggler-wrapper]').length) {
      e.preventDefault()
    }
  }
}
