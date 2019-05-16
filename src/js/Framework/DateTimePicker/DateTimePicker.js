import DatePicker from './DatePicker';

export default class DateTimePicker extends DatePicker {
  constructor (element) {
    super(element);

    this.options = {
      format: 'DD/MM/YYYY hh:mm:ss'
    };

    this.init();
  }
}
