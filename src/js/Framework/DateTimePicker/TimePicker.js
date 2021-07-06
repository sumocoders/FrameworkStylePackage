import flatpickr from "flatpickr"

export class TimePicker {
  constructor (element) {
    this._element = $(element)
  }

  init () {
    flatpickr(this._element, {
      enableTime: true,
      noCalendar: true,
    })
  }
}
