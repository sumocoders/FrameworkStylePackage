export class SetHeight {
  constructor () {
    this.content = document.querySelector('#content')
    this.setContentHeight()
  }

  setContentHeight () {
    this.content.css('minHeight', window.innerHeight)
    let timeout = null

    window.addEventListener(
      'resize',
      function (event) {
        clearTimeout(timeout)
        timeout = setTimeout(
          function () {
            this.content.css('minHeight', window.innerHeight)
          },
          200
        )
      }
    )
  }
}
