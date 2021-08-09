export class Clipboard {
  constructor(element)
  {
    element.addEventListener('click', (event) => {
      const elementId = event.currentTarget.getAttribute('data-clipboard-target');

      if (elementId === null) {
        console.error(
          'data-clipboard-target attribute was not provided. This is the element we will be copying from.'
        );

        return;
      }

      const textSource = document.querySelector(elementId);

      if (textSource === null) {
        console.error('Source element was not found "' + elementId + '".');

        return;
      }

      const text = textSource.select();
      document.execCommand('copy');
    });
  }
}
