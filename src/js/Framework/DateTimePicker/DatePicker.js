import 'tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.css'
import 'tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4';

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

    this.init();
  }

  init () {
    this._element.datetimepicker(
      this.options
    );
  }
}
