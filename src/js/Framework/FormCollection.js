import Sortable from 'sortablejs'

export class FormCollection {
  constructor (element) {
    this.element = element

    this.addButton = this.element.querySelector('[data-role="collection-add-button"]')
    this.items = this.element.querySelectorAll('[data-role="collection-item"]')
    this.numberOfItems = this.items.length

    this.bindEvents()
    this.init()
  }

  bindEvents () {
    this.addButton.addEventListener('click', event => { this.addItem(event) })
    this.element.querySelectorAll('[data-role="collection-remove-button"]').forEach(button => {
      button.addEventListener('click', event => { this.removeItem(event) })
    })
  }

  init () {
    // set index if not defined
    const index = this.element.dataset.index

    if (index === undefined || index === null) {
      this.element.dataset.index = this.numberOfItems
    }

    if (this.element.dataset.allowDragAndDrop === 1) {
      Sortable.create(this.element.querySelector('ul'), {
        handler: '[data-role="collection-item-change-order"]',
        animation: 150,
        ghostClass: 'collection-item-selected',
        chosenClass: 'collection-item-selected',
        dragClass: 'collection-item-selected'
      })
    }
  }

  addItem (event) {
    event.preventDefault()

    document.dispatchEvent(new Event('add.collection.item'))

    let prototype = this.element.dataset.prototype
    // get the new index
    const index = this.element.dataset.index
    // Replace '__name__' in the prototype's HTML to
    // instead be a number based on how many items we have
    prototype = prototype.replace(/__name__/g, index)
    // increase the index with one for the next item
    this.element.dataset.index = index + 1
    // Display the form in the page before the "new" link

    const container = this.element.querySelector('[data-role="collection-item-container"]')

    container.insertAdjacentHTML('beforeend', prototype)

    container.lastElementChild.querySelector('[data-role="collection-remove-button"]').addEventListener('click', event => {
      this.removeItem(event)
    })

    document.dispatchEvent(new Event('added.collection.item'))
  }

  removeItem (event) {
    event.preventDefault()

    document.dispatchEvent(new Event('remove.collection.item'))

    const itemToRemove = event.target.closest('[data-role="collection-item"]')
    console.log(itemToRemove)
    itemToRemove.parentNode.removeChild(itemToRemove)

    document.dispatchEvent(new Event('removed.collection.item'))
  }
}
