export class AlertAutoClose {
  constructor () {
    setTimeout(() => {
      $('.alert.alert-success.alert-dismissible.notification').alert('close')
    }, 5000);
  }
}
