import DatePicker from './DatePicker';

export default class DateTimePicker extends DatePicker {
  constructor (element) {
    super(element);

    delete this.options.format;
  }
}
