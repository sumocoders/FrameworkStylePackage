import {DatePicker} from './DatePicker';
import flatpickr from "flatpickr"

export class DateTimePicker extends DatePicker {
  constructor (element) {
    super(element)
  }

  init () {
    flatpickr(this._element, {
      enableTime: true,
      locale: {
        firstDayOfWeek: 1,
        weekdays: {
          shorthand: this.dayNamesShort,
          longhand: this.dayNames
        },
        months: {
          shorthand: this.monthNamesShort,
          longhand: this.monthNames
        }
      }
    })
  }
}
