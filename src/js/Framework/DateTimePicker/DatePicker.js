import 'moment/locale/nl-be';
import 'moment/locale/fr';
import 'tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4';
import 'tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.css';

export default class DatePicker {
  constructor (element) {
    this._element = $(element);

    this.options = {
      format: 'L',
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

    this.input = this._element.find('input');
  }

  init () {
    try {
      let locale = 'nl-be';
      if (window.jsData !== undefined &&
        window.jsData.request !== undefined &&
        window.jsData.request.locale !== undefined &&
        window.jsData.request.locale !== 'nl' &&
        window.jsData.request.locale !== null) {
        locale = jsData.request.locale;
      }
      this.options.locale = locale;

      if (this.input.attr('data-format')) {
        this.options.format = this.input.attr('data-format')
      }

      if (this.input.attr('data-max-date')) {
        this.options.maxDate = moment(this.input.attr('data-max-date'), this.options.format);
      }

      if (this.input.attr('data-min-date')) {
        this.options.minDate = moment(this.input.attr('data-min-date'), this.options.format);
      }

      this.options.date = moment(this.input.attr('value'), this.options.format, this.options.locale);

      this._element.datetimepicker(
        this.options
      );
    } catch (error) {
      console.error('Error while initializing a datepicker (' + this._element + ')')
    }
  }
}
