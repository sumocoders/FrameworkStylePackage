export class GoBack {
  constructor () {
    this.initGoBack()
  }

  initGoBack () {
    $('[data-button-previous="back"]').on('click', this.goBack)
  }

  goBack (e) {
    e.preventDefault()
    window.history.back()
  }
}
