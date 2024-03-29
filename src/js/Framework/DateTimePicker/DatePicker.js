import flatpickr from 'flatpickr'

export class DatePicker {
  constructor (element) {
    let locale = document.documentElement.lang
    if (locale === 'en') {
      locale = 'default'
    }

    try {
      const i18n = require('flatpickr/dist/l10n/' + locale + '.js').default[locale]

      this.element = flatpickr(element, {
        locale: i18n
      })
    } catch (ex) {
      console.log('No translation found for ' + locale)
    }
  }
}
