import flatpickr from "flatpickr"

export class DatePicker {
  constructor (element) {
    this._element = $(element)

    this.dayNames = [
      Translator.trans('datepicker.full.days.sunday'), Translator.trans('datepicker.full.days.monday'), Translator.trans('datepicker.full.days.tuesday'),
      Translator.trans('datepicker.full.days.wednesday'), Translator.trans('datepicker.full.days.thursday'), Translator.trans('datepicker.full.days.friday'),
      Translator.trans('datepicker.full.days.saturday')
    ]
    this.dayNamesShort = [
      Translator.trans('datepicker.short.days.sunday'), Translator.trans('datepicker.short.days.monday'), Translator.trans('datepicker.short.days.tuesday'),
      Translator.trans('datepicker.short.days.wednesday'), Translator.trans('datepicker.short.days.thursday'), Translator.trans('datepicker.short.days.friday'),
      Translator.trans('datepicker.short.days.saturday')
    ]
    this.monthNames = [
      Translator.trans('datepicker.full.months.january'), Translator.trans('datepicker.full.months.february'), Translator.trans('datepicker.full.months.march'),
      Translator.trans('datepicker.full.months.april'), Translator.trans('datepicker.full.months.may'), Translator.trans('datepicker.full.months.june'),
      Translator.trans('datepicker.full.months.july'), Translator.trans('datepicker.full.months.august'), Translator.trans('datepicker.full.months.september'),
      Translator.trans('datepicker.full.months.october'), Translator.trans('datepicker.full.months.november'), Translator.trans('datepicker.full.months.december')
    ]
    this.monthNamesShort = [
      Translator.trans('datepicker.short.months.january'), Translator.trans('datepicker.short.months.february'), Translator.trans('datepicker.short.months.march'),
      Translator.trans('datepicker.short.months.april'), Translator.trans('datepicker.short.months.may'), Translator.trans('datepicker.short.months.june'),
      Translator.trans('datepicker.short.months.july'), Translator.trans('datepicker.short.months.august'), Translator.trans('datepicker.short.months.september'),
      Translator.trans('datepicker.short.months.october'), Translator.trans('datepicker.short.months.november'), Translator.trans('datepicker.short.months.december')
    ]
  }

  init () {
    flatpickr(this._element, {
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
