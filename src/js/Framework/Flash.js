import Toast from './Components/Toast'
import Vue from 'vue'

export class Flash {
  static add (message, type, delay = 10000) {

    let toastId = 'toast' + Date.now()

    const component = new Vue({
      ...Toast,
      propsData: {
        type: type,
        message: message,
        delay: delay,
        id: toastId
      }
    }).$mount()

    $('#toast-wrapper').prepend(component.$el)

    return toastId
  }

  static remove (toastId) {
    $(`#${toastId}`).toast('hide')
  }
}
