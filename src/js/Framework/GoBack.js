export class GoBack {
  constructor () {
    this.initEventListeners()
  }

  initEventListeners () {
    document.querySelector('[data-button-previous="back"]').addEventListener('click', (event) => {
      event.preventDefault()
      window.history.back()
    })
  }
}
