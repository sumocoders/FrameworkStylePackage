import { Cookies } from './Cookies'

const cookies = new Cookies()

export class Theme {
  constructor () {
    this.togglers = document.querySelectorAll('[data-theme-toggler]')
    this.logo = document.querySelector('[data-navbar-logo]')
    this.darkLogo = document.querySelector('[data-navbar-logo-dark]')
    this.darkThemePath = document.querySelector('body').dataset.themePath
    this.setThemeCookie()
    this.initEventListeners()
  }

  initEventListeners () {
    this.togglers.forEach(toggler => {
      toggler.addEventListener('change', (event) => { this.handleToggleTheme(event) })
      toggler.addEventListener('hide.bs.dropdown', (event) => { this.handleDropdownHiding(event) })
    })
  }

  setThemeCookie () {
    // if cookie is not yet set, get the theme of the device, default light
    if (cookies.readCookie('theme') == null) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        cookies.setCookie('theme', 'dark')
        // set switch toggle checked
        this.togglers.forEach(toggler => {
          toggler.checked = true
        })
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
    if (event.target.checked) {
      themeToBe = 'dark'
    }

    // set cookie
    cookies.setCookie('theme', themeToBe)

    // show the theme
    this.showTheme(themeToBe)
  }

  showTheme (themeToBe) {
    const darkStyleLinkTag = this.getDarkStyleLinkTag();

    if (themeToBe === 'dark') {
      if (darkStyleLinkTag === null) {
        this.addDarkStyleLinkToHead()
      }
      this.darkLogo.classList.remove('d-none')
      this.logo.classList.add('d-none')
    } else {
      if (darkStyleLinkTag !== null) {
        darkStyleLinkTag.remove()
      }
      this.darkLogo.classList.add('d-none')
      this.logo.classList.remove('d-none')
    }
  }

  addDarkStyleLinkToHead () {
    const link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = this.darkThemePath
    document.querySelector('head').appendChild(link)
  }

  getDarkStyleLinkTag () {
    return document.querySelector('link[rel=stylesheet][href="'+ this.darkThemePath +'"]')
  }

  handleDropdownHiding (event) {
    // do not close dropdown when toggle is clicked
    if ($(e.clickEvent).length && $(e.clickEvent.target).parents('[data-theme-toggler-wrapper]').length) {
      e.preventDefault()
    }
  }
}
