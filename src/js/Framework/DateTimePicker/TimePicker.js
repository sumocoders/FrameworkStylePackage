import { DatePicker } from './DatePicker.js'

export class TimePicker extends DatePicker {
  constructor (element) {
    super(element)

    this.element._flatpickr.config.enableTime = true
    this.element._flatpickr.config.noCalendar = true

    element.parentNode.querySelector('[data-flatpicker-clear]').addEventListener('click', event => this.element._flatpickr.clear())
  }
}
