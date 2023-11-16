import Sortable from 'sortablejs'

const FormCollection = function (element) {
  const addButton = element.querySelector('[data-role="collection-add-button"]')
  // set index if not defined
  const index = element.dataset.index

  const items = element.querySelectorAll('[data-role="collection-item"]')
  const numberOfItems = items.length

  addButton.addEventListener('click', event => { addItem(event, element) })
  element.querySelectorAll('[data-role="collection-remove-button"]').forEach(button => {
    button.addEventListener('click', event => { removeItem(event) })
  })

  if (index === undefined || index === null) {
    element.dataset.index = numberOfItems
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
  // Display the form in the page before the "new" link

  const container = element.querySelector('[data-role="collection-item-container"]')

  container.insertAdjacentHTML('beforeend', prototype)

  container.lastElementChild.querySelector('[data-role="collection-remove-button"]').addEventListener('click', event => {
    removeItem(event)
  })

  document.dispatchEvent(new Event('added.collection.item'))
}

const removeItem = function (event) {
  event.preventDefault()

  document.dispatchEvent(new Event('remove.collection.item'))

  const itemToRemove = event.target.closest('[data-role="collection-item"]')
  console.log(itemToRemove)
  itemToRemove.parentNode.removeChild(itemToRemove)

  document.dispatchEvent(new Event('removed.collection.item'))
}

export default FormCollection
