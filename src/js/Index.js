// External frameworks
import * as bootstrap from 'bootstrap/dist/js/bootstrap.js'
import Vue from 'vue'

// Vue components
import Toast from './Framework/Components/Toast'

// Other components
import Form from './Framework/Form'
import GoBack from './Framework/GoBack'
import Popover from './Framework/Popover'
import Scrolling from './Framework/Scrolling'
import Sidebar from './Framework/Sidebar'
import TomSelect from 'tom-select'
import Tabs from './Framework/Tabs'
import Tooltip from './Framework/Tooltip'
import FormCollection from './Framework/FormCollection'
import { DatePicker } from './Framework/DateTimePicker/DatePicker'
import { DateTimePicker } from './Framework/DateTimePicker/DateTimePicker'
import { TimePicker } from './Framework/DateTimePicker/TimePicker'
import Clipboard from './Framework/Clipboard'
import Theme from './Framework/Theme'
import SelectSearch from './Framework/SelectSearch'

window.bootstrap = bootstrap

export function Framework () {
  const formsList = document.querySelectorAll('form')
  Form(formsList)

  const scrollToTopEl = document.querySelector('[data-role="back-to-top"]')
  Scrolling(scrollToTopEl)

  const sidebarEl = document.querySelector('[data-sidebar-wrapper]')
  Sidebar(sidebarEl)

  const backButtonEl = document.querySelector('[data-button-previous="back"]')
  GoBack(backButtonEl)

  // initialize selects
  document.querySelectorAll('[data-role="select"]').forEach((element) => {
    if (element.dataset.options !== null) {
      element.select = new TomSelect(element, element.dataset.options)
    } else {
      element.select = new TomSelect(element, {})
    }
  })

  document.querySelectorAll('[data-role="select-search"]').forEach((element) => {
    SelectSearch(element)
  })

  // initialize collections
  document.querySelectorAll('[data-role="collection"]').forEach((element) => {
    FormCollection(element)
  })

  // initialize datetimepickers
  initializeDateTimePickers()

  // initialize clipboard
  document.querySelectorAll('[data-role="clipboard"]').forEach((element) => {
    element.clipboard = new Clipboard(element)
  })

  Tabs()
  Tooltip()
  Popover()
}

document.addEventListener('DOMContentLoaded', function () {
  const toastWrapper = document.querySelector('#toast-wrapper')
  if (toastWrapper !== null) {
    document.toastComponent = new Vue({
      el: '#toast-wrapper',
      components: { Toast }
    })
  }

  // initialize theme
  Theme()
})

document.addEventListener('added.collection.item', function () {
  initializeDateTimePickers()
})

const initializeDateTimePickers = function () {
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
