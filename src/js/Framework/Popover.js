export class Popover {
  constructor () {
    this.initPopover()
  }

  initPopover () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new window.bootstrap.Popover(tooltipTriggerEl)
    })
  }
}
