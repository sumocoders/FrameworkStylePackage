import 'moment/locale/nl-be';
import 'moment/locale/fr';
import 'tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4';
import 'tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.css';

export default class DatePicker {
  constructor (element) {
    this._element = $(element);

    let locale = 'nl-be';
    if (window.jsData !== undefined &&
      window.jsData.request !== undefined &&
      window.jsData.request.locale !== undefined &&
      window.jsData.request.locale !== 'nl' &&
      window.jsData.request.locale !== null) {
      locale = jsData.request.locale;
    }

    this.options = {
      format: 'L',
      locale: locale,
      icons: {
        time: 'fas fa-clock',
        date: 'fas fa-calendar',
        up: 'fas fa-arrow-up',
        down: 'fas fa-arrow-down',
        previous: 'fas fa-chevron-left',
        next: 'fas fa-chevron-right',
        today: 'fas fa-calendar-check',
        clear: 'fas fa-delete',
        close: 'fas fa-times'
      }
    };
  }

  init () {
    this._element.datetimepicker(
      this.options
    );
  }
}
