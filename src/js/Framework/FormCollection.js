import Sortable from 'sortablejs/Sortable';

export default class FormCollection {
  constructor (element) {
    this._element = $(element);

    this.addButton = this._element.find('[data-role="collection-add-button"]');

    this.bindEvents();
    this.init();
  }

  bindEvents () {
    this.addButton.on('click', $.proxy(this.addItem, this));
    $(document).on('click', '[data-role="collection-remove-button"]', $.proxy(this.removeItem, this));
  }

  init () {
    if (this._element.find('[data-role="collection-item"]').length > 0) {
      this._element.find('[data-role="collection-add-button"]').removeAttr('hidden');
    }

    // set index if not defined
    let index = this._element.data('index');
    if (index === undefined || index === null) {
      this._element.data('index', this._element.find('[data-role="collection-item"]').length)
    }

    Sortable.create(this._element.find('ul')[0], {
      handler: '[data-role="collection-item-change-order"]',
      animation: 150,
      ghostClass: 'collection-item-selected',
      chosenClass: 'collection-item-selected',
      dragClass: 'collection-item-selected'
    })
  }

  addItem (event) {
    event.preventDefault();

    $(document).trigger('add.collection.item');

    const prototype = this._element.data('prototype');
    // get the new index
    let index = this._element.data('index');
    // Replace '__name__' in the prototype's HTML to
    // instead be a number based on how many items we have
    const newForm = prototype.replace(/__name__/g, index);
    // increase the index with one for the next item
    this._element.data('index', index + 1);
    // Display the form in the page before the "new" link
    this._element.find('[data-role="collection-item-container"]').append(newForm);

    // Show add button
    this._element.find('[data-role="collection-add-button"]:last').removeAttr('hidden');

    $(document).trigger('added.collection.item');
  }

  removeItem (event) {
    event.preventDefault();

    $(document).trigger('remove.collection.item');

    $(event.currentTarget)
      .closest('[data-role="collection-item"]')
      .fadeOut(600)
      .remove();

    // Hide last add button if there aren't any collection items
    if (this._element.find('[data-role="collection-item"]').length === 0) {
      this._element.find('[data-role="collection-add-button"]:last').attr('hidden', true);
    }

    $(document).trigger('removed.collection.item');
  }
}
