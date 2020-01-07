export class Alert {
  constructor () {
    this.closeAlert()
  }

  closeAlert () {
    setTimeout(() => {
      $('.alert.alert-success.alert-dismissible.notification').alert('close')
    }, 5000);
  }
}
