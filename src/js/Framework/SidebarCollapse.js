export class SidebarCollapse {
  constructor () {
    $(document).on('click', '[data-sidebar="toggler"]', $.proxy(this.sidebarCollapse, this))
  }

  sidebarCollapse () {
    $('[data-sidebar="wrapper"]').toggleClass('sidebar-collapsed')
  }
}
