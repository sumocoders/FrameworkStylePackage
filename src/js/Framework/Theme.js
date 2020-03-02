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
    // if cookie is not yet set, get the theme of the device, default light
    if (cookies.readCookie('theme') == null) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        cookies.setCookie('theme', 'dark')
      } else {
        cookies.setCookie('theme', 'light')
      }
    }
  }

  doNotClose (e) {
    e.stopPropagation();
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

    this.doNotClose(e);

    /*$('[data-dropdown-user]').addClass('show')
    $('[data-dropdown-user-toggle]').addClass('show')*/

    /*$('[data-dropdown-user-toggle]').dropdown('show')*/

    /*e.closest('.dropdown-menu').dropdown('show')*/
  }

  themeCookie () {
    // read cookie and change theme with it
    this.chooseTheme(cookies.readCookie('theme'))

    /*if (cookies.readCookie('theme') === 'dark') {
      this.chooseTheme('dark')
    } else {
      this.chooseTheme('light')
    }*/
  }

  chooseTheme(themeToBe) {
    $('body').removeClass('theme-light theme-dark')
    $('body').addClass("theme-" + themeToBe)

    if (themeToBe === 'dark') {
      // change toggler
      $('[data-theme-toggler]').prop('checked', true)
      // make it dark
      $('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', '/build/style-dark.css'));
    } else {
      // change toggler
      $('[data-theme-toggler]').prop('checked', false)
      // remove darkness
      $('link[rel=stylesheet][href~="/build/style-dark.css"]').remove();
    }
  }
}

// VERSION WITH BOOTSTRAP 4 : https://codepen.io/seltix/pen/XRPrwM

jQuery('.dropdown-toggle').on('click', function (e) {
  $(this).next().toggle();
});
jQuery('.dropdown-menu.keep-open').on('click', function (e) {
  e.stopPropagation();
});

if(1) {
  $('body').attr('tabindex', '0');
}
else {
  alertify.confirm().set({'reverseButtons': true});
  alertify.prompt().set({'reverseButtons': true});
}

