import { DatePicker } from './DatePicker'

export class TimePicker extends DatePicker {
  constructor (element) {
    super(element)

    this.element._flatpickr.config.enableTime = true
    this.element._flatpickr.config.noCalendar = true

    element.parentNode.querySelector('[data-flatpicker-clear]').addEventListener('click', event => element._flatpickr.clear())
  }
}
