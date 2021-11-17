export class Form {
  constructor () {
    this.forms = document.querySelectorAll('form')
    this.forms.forEach((form) => {
      form.addEventListener('submit', () => { this.hijackSubmit() })
    })
  }

  hijackSubmit () {
    const event = new Event('form_submitting')
    document.dispatchEvent(event)
  }
}
