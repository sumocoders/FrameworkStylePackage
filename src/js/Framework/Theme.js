import { Cookies } from './Cookies'
const cookies = new Cookies()

export class Theme {
  constructor () {
    this.setThemeCookie()
    this.initEventListeners()
  }

  initEventListeners () {
    // on click, do changeTheme
    $(document).on('click', '[data-theme-toggler]', $.proxy(this.handleToggleTheme, this))
    $('[data-dropdown-user-wrapper]').on('hide.bs.dropdown', $.proxy(this.handleDropdownHiding, this))
  }

  setThemeCookie () {
    // if cookie is not yet set, get the theme of the device, default light
    if (cookies.readCookie('theme') == null) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        cookies.setCookie('theme', 'dark')
      } else {
        cookies.setCookie('theme', 'light')
      }
    }

    // set switch toggle checked
    $('[data-theme-toggler]').prop('checked', 'checked')

    // show the theme
    this.showTheme(cookies.readCookie('theme'))
  }

  handleToggleTheme (event) {
    // set new theme
    let themeToBe = 'light'
    if ($(event.currentTarget).prop('checked')) {
      themeToBe = 'dark'
    }

    // set cookie
    if (themeToBe === 'dark') {
      cookies.setCookie('theme', 'dark')
    } else {
      cookies.setCookie('theme', 'light')
    }

    // show the theme
    this.showTheme(themeToBe)
  }

  showTheme (themeToBe) {
    if (themeToBe === 'dark') {
      // make it dark
      $('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', '/build/style-dark.css'))
    } else {
      // remove darkness
      $('link[rel=stylesheet][href~="/build/style-dark.css"]').remove()
    }
  }

  handleDropdownHiding (e) {
    if ($(e.clickEvent.target).parents('[data-theme-toggler-wrapper]').length) {
      e.preventDefault()
    }
  }
}
