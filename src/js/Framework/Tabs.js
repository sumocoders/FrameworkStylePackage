export class Tabs {
  constructor () {
    this.loadTab()
  }

  loadTab () {
    const anchor = document.location.hash
    if (anchor !== '') {
      const tab = document.querySelector('.nav-tabs a[href="' + anchor + '"]')
      if (tab.length > 0) {
        tab.tab('show')
      }
    }
  }
}
