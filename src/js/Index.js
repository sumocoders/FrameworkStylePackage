// Bootstrap import
import 'bootstrap/dist/js/bootstrap'
import Vue from 'vue'
import Toast from './Framework/Components/Toast'

import { Ajax } from './Framework/Ajax'
import { Form } from './Framework/Form'
import { GoBack } from 'frameworkstylepackage/src/js/Framework/GoBack'
import { Link } from './Framework/Link'
import { LoadingBar } from './Framework/LoadingBar'
import { Navbar } from './Framework/Navbar'
import { Popover } from './Framework/Popover'
import { Scrolling } from './Framework/Scrolling'
import { SetHeight } from './Framework/SetHeight'
import { Sidebar } from 'frameworkstylepackage/src/js/Framework/Sidebar'
import { Searchbar } from './Framework/Searchbar'
import { Select } from './Framework/Select'
import { Slider } from './Framework/Slider'
import { Sortable } from './Framework/Sortable'
import { Table } from './Framework/Table'
import { Tabs } from './Framework/Tabs'
import { Tooltip } from './Framework/Tooltip'
import FormCollection from './Framework/FormCollection'
import DatePicker from './Framework/DateTimePicker/DatePicker'
import DateTimePicker from './Framework/DateTimePicker/DateTimePicker'
import TimePicker from './Framework/DateTimePicker/TimePicker'
import Clipboard from './Framework/Clipboard'
import { ScrollEvent } from 'frameworkstylepackage/src/js/Framework/ScrollEvent'
import { Theme } from 'frameworkstylepackage/src/js/Framework/Theme'
import { FileInput } from 'frameworkstylepackage/src/js/Framework/FileInput'

export class Framework {
  constructor () {
    this.ajax = new Ajax()
    this.form = new Form()
    this.link = new Link()
    this.loadingBar = new LoadingBar()
    this.navbar = new Navbar()
    this.scrolling = new Scrolling()
    this.setHeight = new SetHeight()
    this.sidebar = new Sidebar()
    this.searchBar = new Searchbar()
    this.table = new Table()
    this.tabs = new Tabs()
    this.goBack = new GoBack()
    this.scrollEvent = new ScrollEvent()
    this.fileInput = new FileInput()
    $(window).on('load', () => {
      this.theme = new Theme()
    })

    Framework.initializeSliders()
    Framework.initializeSortables()
    Framework.initializePopovers()
    Framework.initializeTooltips()
    Framework.initializeSelects()
    Framework.initializeCollections()
    Framework.initializeDateTimePickers()
    Framework.initializeClipboard()
  }

  static initializeSliders () {
    $('.slider').each((index, element) => {
      element.slider = new Slider($(element))
    })
  }

  static initializeSortables () {
    $('.sortable').each((index, element) => {
      element.sortable = new Sortable($(element))
    })
  }

  static initializePopovers () {
    $('[data-toggle="popover"]').each((index, element) => {
      element.popover = new Popover($(element))
    })
  }

  static initializeTooltips () {
    $('[data-toggle="tooltip"]').each((index, element) => {
      element.tooltip = new Tooltip($(element))
    })
  }

  static initializeSelects () {
    $('.select2').each((index, element) => {
      element.select2 = new Select($(element))
    })
  }

  static initializeCollections () {
    $('[data-role="collection"]').each((index, element) => {
      new FormCollection(element)
    })
  }

  static initializeDateTimePickers () {
    $('[data-role="date-time-picker"]').each((index, element) => {
      new DateTimePicker(element).init()
    });

    $('[data-role="date-picker"]').each((index, element) => {
      new DatePicker(element).init()
    });

    $('[data-role="time-picker"]').each((index, element) => {
      new TimePicker(element).init()
    });
  }

  static initializeClipboard () {
    $('[data-role="clipboard"]').each((index, element) => {
      new Clipboard(element)
    });
  }
}

$(window).on('load', () => {
  if ($('#toast-wrapper').length) {
    new Vue({
      el: '#toast-wrapper',
      components: {Toast}
    })
  }
})
