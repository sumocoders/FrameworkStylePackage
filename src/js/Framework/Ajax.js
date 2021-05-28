import {Flash} from './Flash'

export class Ajax {
  constructor () {
    this.initAjax()
  }

  initAjax () {
    /* set some defaults for AJAX-request */
    $.ajaxSetup(
      {
        cache: false,
        type: 'POST',
        dataType: 'json',
        timeout: 5000
      }
    )

    /* 403 means we aren't authenticated anymore, so reload the page */
    $(document).ajaxError((event, XMLHttpRequest, ajaxOptions) => {
      if (XMLHttpRequest.status === 403) {
        window.location.reload()
      }

      if (ajaxOptions !== null) {
        let textStatus = Translator.trans('GeneralError')

        if (XMLHttpRequest.responseText !== null) {
          let json = $.parseJSON(XMLHttpRequest.responseText)

          if (json.message !== null) {
            textStatus = json.message
          } else {
            textStatus = XMLHttpRequest.responseText
          }
        }

        Flash.add(textStatus, 'danger')
      }

      return false
    })

    $(document).ajaxStart(() => {
      $.event.trigger('ajax_start')
    })

    $(document).ajaxStop(() => {
      $.event.trigger('ajax_stop')
    })
  }
}
