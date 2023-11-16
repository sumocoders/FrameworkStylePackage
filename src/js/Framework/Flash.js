import Toast from './Components/Toast'
import Vue from 'vue'

export function addFlash (message, type, delay = 10000) {
  const toastId = 'toast' + Date.now()

  const component = new Vue({
    ...Toast,
    propsData: {
      type: type,
      message: message,
      delay: delay,
      id: toastId
    }
  }).$mount()

  const toastWrapper = document.querySelector('#toast-wrapper')
  toastWrapper.insertBefore(component.$el, toastWrapper.firstChild)
  return toastId
}
