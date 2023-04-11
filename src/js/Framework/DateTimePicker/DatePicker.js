import flatpickr from 'flatpickr'

export class DatePicker {
  constructor (element) {
    const locale = document.documentElement.lang

    try {
      const i18n = require('flatpickr/dist/l10n/' + locale + '.js').default

      this.element = flatpickr(element, {
        locale: i18n
      })
    } catch (ex) {
      console.log('No translation found for ' + locale)
    }
  }
}
