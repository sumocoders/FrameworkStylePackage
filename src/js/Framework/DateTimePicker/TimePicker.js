import flatpickr from 'flatpickr'
import { Dutch } from 'flatpickr/dist/l10n/nl.js'

export class TimePicker {
  constructor (element) {
    this.element = flatpickr(element, {
      enableTime: true,
      noCalendar: true,
      locale: Dutch
    })

    element.parentNode.querySelector('[data-flatpicker-clear]').addEventListener('click', event => element._flatpickr.clear())
  }
}
