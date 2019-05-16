import 'tempusdominus-bootstrap-4';
import 'tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.css'

export default class DatePicker {
  constructor (element) {
    this._element = $(element);

    this.options = {
      format: 'DD/MM/YYYY'
    };

    this.init();
  }

  init () {
    this._element.datetimepicker(
      this.options
    );
  }
}
