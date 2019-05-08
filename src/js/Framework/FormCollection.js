import { Framework } from '../Index';
import 'symfony-collection/jquery.collection';

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

      const resetTooltips = () => {
        const tooltips = document.querySelector('.tooltip');
        if (tooltips !== null) {
          tooltips.remove();
        }
        Framework.initializeTooltips();
      };

      item.collection({
        add: buttonsContainer.find('[data-role="collection-template-button"][data-action="add"]')[0].outerHTML,
        remove: buttonsContainer.find('[data-role="collection-template-button"][data-action="remove"]')[0].outerHTML,
        up: buttonsContainer.find('[data-role="collection-template-button"][data-action="up"]')[0].outerHTML,
        down: buttonsContainer.find('[data-role="collection-template-button"][data-action="down"]')[0].outerHTML,
        after_up: resetTooltips,
        after_down: resetTooltips,
        after_add: resetTooltips,
        after_remove: resetTooltips,
      });

      buttonsContainer.remove();
    });
  }
}
