export class GoBack {
  constructor () {
    this.backButton = document.querySelector('[data-button-previous="back"]')
    this.initEventListeners()
  }

  initEventListeners () {
    if (this.backButton !== null) {
      this.backButton.addEventListener('click', (event) => {
        event.preventDefault()
        window.history.back()
      })
    }
  }
}
