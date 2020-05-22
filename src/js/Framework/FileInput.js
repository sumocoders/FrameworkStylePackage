export class FileInput {
  constructor() {
    this.initEventListeners()
  }

  initEventListeners () {
    $('.custom-file-input').on('change', $.proxy(this.getUploadedFile, this))
  }

  getUploadedFile (event) {
    let file = ''
    event = event.originalEvent

    for (let i = 0; i < event.target.files.length; i++) {
      // If dropped items aren't files, reject them
      file = event.target.files[i]
    }

    $(event.currentTarget).next('.custom-file-label').text(file.name)
  }
}
