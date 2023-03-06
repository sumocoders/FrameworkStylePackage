// External frameworks
import * as bootstrap from 'bootstrap/dist/js/bootstrap.js'
import Vue from 'vue'
import Translator from 'bazinga-translator'

// Vue components
import Toast from './Framework/Components/Toast'

// Other components
import { Form } from './Framework/Form'
import { GoBack } from './Framework/GoBack'
import { Popover } from './Framework/Popover'
import { Scrolling } from './Framework/Scrolling'
import { Sidebar } from './Framework/Sidebar'
import { Select } from './Framework/Select'
import { Tabs } from './Framework/Tabs'
import { Tooltip } from './Framework/Tooltip'
import { FormCollection } from './Framework/FormCollection'
import { DatePicker } from './Framework/DateTimePicker/DatePicker'
import { DateTimePicker } from './Framework/DateTimePicker/DateTimePicker'
import { TimePicker } from './Framework/DateTimePicker/TimePicker'
import { Clipboard } from './Framework/Clipboard'
import { Theme } from './Framework/Theme'

/*
 * Hack to provide the global Translator object that
 * is required by the Bazinga JS translations, while
 * keeping the dependency managed by Webpack.
 *
 * As long as there is a global Translator object in this file:
 * https://github.com/willdurand/BazingaJsTranslationBundle/blob/master/Resources/views/config.js.twig#L4
 * This fix is still needed.
 *
 * See https://github.com/willdurand/BazingaJsTranslationBundle/issues/252
 */
global.Translator = Translator
window.bootstrap = bootstrap

export class Framework {
  constructor () {
    this.form = new Form()
    this.scrolling = new Scrolling()
    this.sidebar = new Sidebar()
    this.tabs = new Tabs()
    this.goBack = new GoBack()
    this.tooltip = new Tooltip()
    this.popover = new Popover()

    Framework.initializeSelects()
    Framework.initializeCollections()
    Framework.initializeDateTimePickers()
    Framework.initializeClipboard()
  }

  static initializeSelects () {
    document.querySelectorAll('[data-role="select"]').forEach((element) => {
      if (element.dataset.options !== null) {
        element.select = new Select(element, element.dataset.options)
      } else {
        element.select = new Select(element)
      }
    })
  }

  static initializeCollections () {
    document.querySelectorAll('[data-role="collection"]').forEach((element) => {
      element.collection = new FormCollection(element)
    })
  }

  static initializeDateTimePickers () {
    document.querySelectorAll('[data-role="date-picker"]').forEach((element) => {
      element.datepicker = new DatePicker(element)
    })

    document.querySelectorAll('[data-role="time-picker"]').forEach((element) => {
      element.timepicker = new TimePicker(element)
    })

    document.querySelectorAll('[data-role="date-time-picker"]').forEach((element) => {
      element.datetimepicker = new DateTimePicker(element)
    })
  }

  static initializeClipboard () {
    document.querySelectorAll('[data-role="clipboard"]').forEach((element) => {
      element.clipboard = new Clipboard(element)
    })
  }

  static initializeTheme () {
    this.theme = new Theme()
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const toastWrapper = document.querySelector('#toast-wrapper')
  if (toastWrapper !== null) {
    document.toastComponent = new Vue({
      el: '#toast-wrapper',
      components: { Toast }
    })
  }

  Framework.initializeTheme()
})

document.addEventListener('added.collection.item', function () {
  Framework.initializeDateTimePickers()
})
