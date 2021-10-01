import flatpickr from 'flatpickr'

export class TimePicker {
  constructor (element) {
    this.element = flatpickr(element, {
      enableTime: true,
      noCalendar: true
    })
  }
}
