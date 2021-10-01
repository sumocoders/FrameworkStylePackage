import Sortable from 'sortablejs'

export class DragAndDrop {
  constructor (element) {
    this.element = element
    this.options = element.dataset.options
    this.sortable = Sortable.create(this.element, this.options)
  }
}
