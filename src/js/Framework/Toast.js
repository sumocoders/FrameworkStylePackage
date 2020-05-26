export class Toast {
  constructor (element) {
    this.element = element
    this.initToast()
  }

  initToast () {
    this.element.toast('show')
  }
}
