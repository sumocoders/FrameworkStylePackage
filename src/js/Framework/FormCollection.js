require('symfony-collection/jquery.collection');

export default class FormCollection {
  constructor () {
    this.init();
  }

  init () {
    let collection = $('[data-role="collection"]');

    collection.each((index, item) => {
      item = $(item);
      const buttonsContainer = $('[data-role="collection-template-button-container"][data-target="' + item.attr('id') + '"]');

      if (buttonsContainer.length === 0) {
        console.log('Not buttons found for collection')
        return;
      }

      item.collection({
        add: buttonsContainer.find('[data-role="collection-template-button"][data-action="add"]')[0].outerHTML,
        remove: buttonsContainer.find('[data-role="collection-template-button"][data-action="remove"]')[0].outerHTML
      });

      buttonsContainer.remove();
    });
  }
}
