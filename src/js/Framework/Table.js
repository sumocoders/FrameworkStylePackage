export class Table {
  constructor () {
    this.initEventListeners()
  }

  initEventListeners () {
    document.querySelectorAll('.table tr').forEach((row) => {
      row.addEventListener('click', this.clickableTableRow)
    })
  }

  clickableTableRow (event) {
    if (event.target.nodeName !== 'TD') {
      return
    }

    const actionUrl = event.target.parentNode.querySelector('.action a').href
    if (actionUrl) {
      window.document.location = actionUrl
    }
  }
}
