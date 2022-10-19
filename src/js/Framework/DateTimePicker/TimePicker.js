import flatpickr from 'flatpickr'

export class TimePicker {
  constructor (element) {
    this.element = flatpickr(element, {
      enableTime: true,
      noCalendar: true
    })

    element.parentNode.querySelector('[data-flatpicker-clear]').addEventListener('click', event => element._flatpickr.clear())
  }
}
