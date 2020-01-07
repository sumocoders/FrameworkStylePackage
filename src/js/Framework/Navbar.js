export class Navbar {
  constructor () {
    this.initNavbar()
  }

  initNavbar () {
    $('#main-menu-inner .dropdown-toggle').on('click', $.proxy(this.toggleDrowdown, this))
    this.setClassesBasedOnSubNavigation()
    $(document).on('click', $.proxy(this.closeNavbar, this))
    $('#main-menu-inner .navbar-toggler').on('click', $.proxy(this.removeScrollFromBody, this))
  }

  toggleDrowdown (event) {
    event.preventDefault()
    let $this = $(event.currentTarget)
    let $parent = $this.parent()

    $parent.toggleClass('active')
  }

  setClassesBasedOnSubNavigation () {
    // we can't use toggle class as we don't know what the current state is
    if ($('#navbar .nav ul.open').length === 0) {
      $('#toggleTabletNavbar, #navbar, #content, .alert').removeClass('subnav')

      return
    }

    $('#toggleTabletNavbar, #navbar, #content, .alert').addClass('subnav')
  }

  closeNavbar (e) {
    const navWrapper = $('[data-role="navbar-wrapper"]')
    if (!navWrapper.is(e.target) && navWrapper.has(e.target).length === 0) {
      $('[data-role="navbar-collapse"]').collapse('hide')
      $('body').removeClass('no-scroll')
    }
  }

  removeScrollFromBody (e) {
    console.log('change collapse')
    console.log($(e.currentTarget))
    if ($(e.currentTarget).hasClass('collapsed')) {
      $('body').addClass('no-scroll')
    } else {
      $('body').removeClass('no-scroll')
    }
  }
}
