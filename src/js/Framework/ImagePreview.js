export class ImagePreview {
  constructor () {
    this.initForm()
  }

  initForm () {
    $('input[type=file]').on('change', function () {
      let imageField = $(this).get(0);
      // make sure we are uploading an image by checking the data attribute
      if (imageField.getAttribute('data-framework-role') === 'image-field' && imageField.files && imageField.files[0]) {
        // get the image preview by matching the image-preview data-id to the ImageField id
        let $imagePreview = $('[data-framework-role="image-preview"][data-id="' + imageField.id + '"]');
        // use FileReader to get the url
        let reader = new FileReader();

        reader.onload = function (event) {
          $imagePreview.attr('src', event.target.result);
        }

        reader.readAsDataURL(imageField.files[0]);
      }
    })
  }
}
