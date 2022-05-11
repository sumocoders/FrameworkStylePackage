export class Tabs {
  constructor () {
    this.loadTab()
  }

  loadTab () {
    const anchor = document.location.hash
    if (anchor !== '') {
      const tab = document.querySelector('.nav-tabs button[data-bs-target="' + anchor + '"]')
      if (tab !== null) {
        const tabTrigger = new bootstrap.Tab(tab)
        tabTrigger.show()
      }
    }
  }
}
