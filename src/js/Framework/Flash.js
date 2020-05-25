export class Flash {
  static add (message, type, delay = 10000) {

    console.log('---- HELLOOWWWWW')
    let alertId = Date.now()

    let icon = 'check'

    if (type === 'info') {
      icon = 'info-circle'
    }
    if (type === 'warning') {
      icon = 'exclamation'
    }
    if (type === 'danger') {
      icon = 'exclamation-triangle'
    }

    $('.toasts-wrapper').prepend(
      `<div class="toast toast-${type}" data-alert-id="${alertId}" role="status" aria-live="polite" data-delay="${delay}">
          <div class="toast-body">
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">
              <span aria-hidden="true">&times;</span>
            </button>
            <div class="d-flex flex-row">
              <i class="fas fa-${icon} mr-3 mt-1 toast-icon"></i>
              ${message}
            </div>
         </div>
    </div>`
    )

    $('[data-alert-id=' + alertId + ']').toast('show')

    return alertId
  }

  static remove (alertId) {
    $('[data-alert-id=' + alertId + ']').toast('hide')
  }
}
