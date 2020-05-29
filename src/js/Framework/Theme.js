import { Cookies } from './Cookies'
import { Data } from './Data'

const cookies = new Cookies()
const data = new Data()

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
        // set switch toggle checked
        $('[data-theme-toggler]').prop('checked', 'checked')
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
    if ($(event.currentTarget).prop('checked')) {
      themeToBe = 'dark'
    }

    // set cookie
    cookies.setCookie('theme', themeToBe)

    // show the theme
    this.showTheme(themeToBe)
  }

  showTheme (themeToBe) {
    if (themeToBe === 'dark') {
      // make it dark
      $('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', data.get('theme.paths.dark')))
    } else {
      // remove darkness
      $('link[rel=stylesheet][href~="' + data.get('theme.paths.dark') + '"]').remove()
    }
  }

  handleDropdownHiding (e) {
    // do not close dropdown when toggle is clicked
    if ($(e.clickEvent).length && $(e.clickEvent.target).parents('[data-theme-toggler-wrapper]').length) {
      e.preventDefault()
    }
  }
}
