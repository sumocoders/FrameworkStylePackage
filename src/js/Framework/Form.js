export class Form {
  constructor () {
    document.querySelector('form').addEventListener('submit', () => { this.hijackSubmit() })
  }

  hijackSubmit () {
    const event = new Event('form_submitting')
    document.dispatchEvent(event)
  }
}
