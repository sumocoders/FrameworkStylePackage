import { DatePicker } from './DatePicker.js'

export class DateTimePicker extends DatePicker {
  constructor (element) {
    super(element)

    this.element._flatpickr.config.enableTime = true
  }
}
