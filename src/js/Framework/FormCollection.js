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
  }

  addItem (event) {
    event.preventDefault();

    // Get the data-prototype explained earlier
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
      }

  removeItem (event) {
    event.preventDefault();

    $(event.currentTarget)
      .closest('[data-role="collection-item"]')
      .fadeOut(600)
      .remove();

    // Hide last add button if there aren't any collection items
    if (this._element.find('[data-role="collection-item"]').length === 0) {
      this._element.find('[data-role="collection-add-button"]:last').attr('hidden', true);
    }
  }
}
