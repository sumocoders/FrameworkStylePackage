import { DatePicker } from './DatePicker'

export class DateTimePicker extends DatePicker {
  constructor (element) {
    super(element)

    this.element._flatpickr.config.enableTime = true
  }
}
