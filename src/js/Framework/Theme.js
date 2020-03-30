import { Cookies } from './Cookies'
const cookies = new Cookies()

export class Theme {
  constructor () {
    this.setInitTheme()
    this.initEventListeners()
  }

  initEventListeners () {
    // on click, do changeTheme
    $(document).on('click', '[data-theme-toggler]', $.proxy(this.changeTheme, this))
    $('[data-dropdown-user-wrapper]').on('hide.bs.dropdown', $.proxy(this.handleDropdownHiding, this))
  }

  setInitTheme () {
    // if cookie is not yet set, get the theme of the device, default light
    if (cookies.readCookie('theme') == null) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        cookies.setCookie('theme', 'dark')
      } else {
        cookies.setCookie('theme', 'light')
      }
    }

    // read cookie and change theme with it
    this.updateTheme(cookies.readCookie('theme'))
  }

  changeTheme () {
    // read cookie --> themeToBe setten

    let $themeToBe = 'dark'

    if (cookies.readCookie('theme') === 'dark') {
      $themeToBe = 'light'
    }

    this.updateTheme($themeToBe)

    // set cookie
    if ($themeToBe === 'dark') {
      cookies.setCookie('theme', 'dark')
    } else {
      cookies.setCookie('theme', 'light')
    }
  }

  updateTheme (themeToBe) {
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

  handleDropdownHiding (e) {
    if ($(e.clickEvent.target).parents('[data-theme-toggler-wrapper]').length) {
      e.preventDefault()
    }
  }
}
