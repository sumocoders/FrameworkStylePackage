export class Flash {
  add (message, type, time) {
    let alertId = Date.now()

    $('.notifications-wrapper').prepend(
      `<div class="alert alert-${type} alert-dismissible notification fade show" role="status" data-alert-id="${alertId}">
         ${message}
         <button type="button" class="close" data-dismiss="alert">
            <span aria-hidden="true">&times;</span>
        </button>
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
