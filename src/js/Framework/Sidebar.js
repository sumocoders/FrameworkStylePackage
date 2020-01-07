import {Cookies} from './Cookies'
const cookies = new Cookies()

export class Sidebar {
  constructor () {
    this.sidebarCookie()
    this.initSidebarCollapse()
  }

  initSidebarCollapse () {
    $(document).on('click', '[data-sidebar-toggler]', $.proxy(this.sidebarCollapse, this))
  }

  sidebarCollapse () {
    $('[data-sidebar-wrapper]').toggleClass('sidebar-collapsed')
    // set cookie
    if ($('[data-sidebar-wrapper]').hasClass('sidebar-collapsed')) {
      cookies.setCookie('sidebar_is_open', 'false')
    } else {
      cookies.setCookie('sidebar_is_open', 'true')
    }
  }

  sidebarCookie () {
    if ($(window).width() > 576) {
      // read cookie
      if (cookies.readCookie('sidebar_is_open') === 'false') {
        $('[data-sidebar-wrapper]').addClass("sidebar-collapsed")
      } else {
        $('[data-sidebar-wrapper]').removeClass("sidebar-collapsed")
      }
    }
  }
}
