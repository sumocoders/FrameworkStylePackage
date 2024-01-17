import Sortable from 'sortablejs'

const FormCollection = function (element) {
  this.addButton = element.querySelector('[data-role="collection-add-button"]')
  // set index if not defined
  const index = element.dataset.index

  const items = element.querySelectorAll('[data-role="collection-item"]')

  this.numberOfItems = items.length
  this.minimumItems = element.dataset.min !== undefined && element.dataset.min !== 'null' ? parseInt(element.dataset.min) : 0
  this.maximumItems = element.dataset.max !== undefined && element.dataset.max !== 'null' ? parseInt(element.dataset.max) : null

  this.addButton.addEventListener('click', event => { addItem(event, element) })
  element.querySelectorAll('[data-role="collection-remove-button"]').forEach(button => {
    button.addEventListener('click', event => { removeItem(event) })
  })

  if (index === undefined || index === null) {
    element.dataset.index = this.numberOfItems
  }

  if (element.dataset.allowDragAndDrop === '1') {
    Sortable.create(element.querySelector('ul'), {
      handler: '[data-role="collection-item-change-order"]',
      animation: 150,
      ghostClass: 'collection-item-selected',
      chosenClass: 'collection-item-selected',
      dragClass: 'collection-item-selected'
    })
  }

  // Add minimum items
  while (this.numberOfItems < this.minimumItems) {
    addItem(new Event('click'), element)
  }
}

const addItem = function (event, element) {
  event.preventDefault()

  document.dispatchEvent(new Event('add.collection.item'))

  let prototype = element.dataset.prototype
  // get the new index
  const index = parseInt(element.dataset.index)
  // Replace '__name__' in the prototype's HTML to
  // instead be a number based on how many items we have
  prototype = prototype.replace(/__name__/g, index)
  // increase the index with one for the next item
  element.dataset.index = index + 1
  // increase the number of items
  this.numberOfItems++
  // Display the form in the page before the "new" link

  const container = element.querySelector('[data-role="collection-item-container"]')

  container.insertAdjacentHTML('beforeend', prototype)

  container.lastElementChild.querySelector('[data-role="collection-remove-button"]').addEventListener('click', event => {
    removeItem(event)
  })

  if (this.maximumItems && this.numberOfItems >= this.maximumItems) {
    this.addButton.setAttribute('disabled', 'disabled')
  }

  document.dispatchEvent(new Event('added.collection.item'))
}

const removeItem = function (event) {
  event.preventDefault()

  document.dispatchEvent(new Event('remove.collection.item'))

  const itemToRemove = event.target.closest('[data-role="collection-item"]')
  itemToRemove.parentNode.removeChild(itemToRemove)
  this.numberOfItems--
  if (this.maximumItems && this.numberOfItems < this.maximumItems) {
    this.addButton.removeAttribute('disabled')
  }

  document.dispatchEvent(new Event('removed.collection.item'))
}

export default FormCollection
