import flatpickr from 'flatpickr'
import { Dutch } from 'flatpickr/dist/l10n/nl.js'

export class DatePicker {
  constructor (element) {
    this.element = flatpickr(element, {
      locale: Dutch
    })
  }
}
