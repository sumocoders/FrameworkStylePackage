import DatePicker from './DatePicker';

export default class TimePicker extends DatePicker {
  constructor (element) {
    super(element);

    this.options.format = 'LT';
  }
}
