import {Cookies} from './Cookies'
const cookies = new Cookies()

export class Theme {
  constructor () {
    this.getTheme()
    this.themeCookie()
    this.initChangeTheme()
  }

  initChangeTheme () {
    // on click, do changeTheme
    $(document).on('click', '[data-theme-toggler]', $.proxy(this.changeTheme, this))
  }

  getTheme () {
    // if cookie is not set, get the theme of the device
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

    let $themeToBe = e.target.dataset.themeToggler
    this.chooseTheme($themeToBe)

    // set cookie
    if ($themeToBe === 'dark') {
      cookies.setCookie('theme', 'dark')
    } else {
      cookies.setCookie('theme', 'light')
    }
  }

  themeCookie () {
    // read cookie
    if (cookies.readCookie('theme') === 'dark') {
      this.chooseTheme('dark')
    } else {
      this.chooseTheme('light')
    }
  }

  chooseTheme(theme) {
    // remove classes that start with theme-
    // todo
    $('body').toggleClass('theme-light theme-dark')
    $('body').addClass("theme-" + theme)
    if (theme === 'dark') {
      $('[data-theme-toggler]').removeClass('active')
      $('[data-theme-toggler="dark"]').addClass('active')
      // zorg dat het effectief dark is
      $('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', '/build/style-dark.css'));
    } else {
      $('[data-theme-toggler]').removeClass('active')
      $('[data-theme-toggler="light"]').addClass('active')
      // verwijder dark theme
      $('link[rel=stylesheet][href~="/build/style-dark.css"]').remove();
    }
  }
}
