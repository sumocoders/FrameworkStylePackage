export class GoBack {
  constructor () {
    this.initEventListeners()
  }

  initEventListeners () {
    $('[data-button-previous="back"]').on('click', this.goBack)
  }

  goBack (e) {
    e.preventDefault()
    window.history.back()
  }
}
