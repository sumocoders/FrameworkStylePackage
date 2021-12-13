import { Cookies } from './Cookies'
const cookies = new Cookies()

export class Sidebar {
  constructor () {
    this.sidebar = document.querySelector('[data-sidebar-wrapper]')

    if (this.sidebar !== null) {
      this.sidebarCookie()
      this.initSidebarCollapse()
    }
  }

  initSidebarCollapse () {
    document.querySelector('[data-sidebar-toggler]').addEventListener('click', () => {
      this.sidebarCollapse()
    })
  }

  sidebarCollapse () {
    this.sidebar.classList.toggle('sidebar-collapsed')
    // set cookie
    if (this.sidebar.classList.contains('sidebar-collapsed')) {
      cookies.setCookie('sidebar_is_open', 'false')
    } else {
      cookies.setCookie('sidebar_is_open', 'true')
    }
  }

  sidebarCookie () {
    if (window.innerWidth > 576) {
      // read cookie
      if (cookies.readCookie('sidebar_is_open') === 'false') {
        this.sidebar.classList.add('sidebar-collapsed')
      } else {
        this.sidebar.classList.remove('sidebar-collapsed')
      }
    }
  }
}
