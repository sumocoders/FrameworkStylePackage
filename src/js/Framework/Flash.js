export class Flash {
  add (message, type, time) {
    let alertId = Date.now()

    $('.toasts-wrapper').prepend(
      `<div class="toast toast-${type} fade show" data-alert-id="${alertId}">
          <div class="toast-body">
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">
              <span aria-hidden="true">&times;</span>
            </button>
            ${message}
         </div>
    </div>`
    )

    if (time !== undefined && time !== null) {
      let callback = () => this.remove(alertId)
      setTimeout(callback, time)
    }

    return alertId
  }

  remove (alertId) {
    $('[data-alert-id=' + alertId + ']').alert('close')
  }
}
