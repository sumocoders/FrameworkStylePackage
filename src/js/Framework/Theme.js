import { Cookies } from './Cookies'
const cookies = new Cookies()

export class Theme {
  constructor () {
    this.getTheme()
    this.themeCookie()
    this.initEventListeners()
    this.doNotHideDropdown()
  }

  initEventListeners () {
    // on click, do changeTheme
    $(document).on('click', '[data-theme-toggler]', $.proxy(this.changeTheme, this))
    $('[data-dropdown-user-wrapper]').on('hide.bs.dropdown', $.proxy(this.doNotHideDropdown, this))
  }

  getTheme () {
    // if cookie is not yet set, get the theme of the device, default light
    if (cookies.readCookie('theme') == null) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        cookies.setCookie('theme', 'dark')
      } else {
        cookies.setCookie('theme', 'light')
      }
    }
  }

  changeTheme (e) {
    e.preventDefault()
    // read cookie --> currentTheme & themeToBe setten
    let $themeToBe = 'dark'

    if (cookies.readCookie('theme') === 'dark') {
      $themeToBe = 'light'
    }

    this.chooseTheme($themeToBe)

    // set cookie
    if ($themeToBe === 'dark') {
      cookies.setCookie('theme', 'dark')
    } else {
      cookies.setCookie('theme', 'light')
    }
  }

  themeCookie () {
    // read cookie and change theme with it
    this.chooseTheme(cookies.readCookie('theme'))
  }

  chooseTheme (themeToBe) {
    $('body').removeClass('theme-light theme-dark').addClass('theme-' + themeToBe)

    if (themeToBe === 'dark') {
      // change toggler
      $('[data-theme-toggler]').prop('checked', true)
      // make it dark
      $('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', '/build/style-dark.css'))
    } else {
      // change toggler
      $('[data-theme-toggler]').prop('checked', false)
      // remove darkness
      $('link[rel=stylesheet][href~="/build/style-dark.css"]').remove()
    }
  }

  doNotHideDropdown (e) {
    if ($(e.clickEvent.target).parents('[data-theme-toggler-wrapper]').length) {
      e.preventDefault()
    }
  }
}
