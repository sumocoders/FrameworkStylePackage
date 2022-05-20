import TomSelect from 'tom-select'

export class Select {
  constructor (element) {
    this.element = element

    this.initSelect()
  }

  initSelect () {
    this.select = new TomSelect(this.element, {
      persist: false,
      create: create,
      render: {
        no_results: function (data, escape) {
          return '<div class="no-results">Geen resultaten</div>'
        },
        option_create: function (data, escape) {
          return '<div class="create">Voeg <strong>' + escape(data.input) + '</strong> toe&hellip;</div>'
        }
      }
    })
  }
}
