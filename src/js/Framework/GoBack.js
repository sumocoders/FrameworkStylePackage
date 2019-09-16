export class GoBack {
  constructor () {
    $('[data-button="back"]').on('click', this.goBack)
  }

  goBack () {
    window.history.back();
  }
}
