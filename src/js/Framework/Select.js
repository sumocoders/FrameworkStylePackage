import TomSelect from 'tom-select'

export class Select {
  constructor (element, options = {}) {
    this.element = element
    this.options = options

    this.initSelect()
  }

  initSelect () {
    this.select = new TomSelect(this.element, this.options)
  }
}
