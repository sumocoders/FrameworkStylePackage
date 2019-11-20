export class GoBack {
  constructor () {
    this.initGoBack()
  }

  initGoBack () {
    $('[data-button="back"]').on('click', this.goBack)
  }

  goBack () {
    window.history.back();
  }
}
