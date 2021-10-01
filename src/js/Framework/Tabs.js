export class Tabs {
  constructor () {
    this.initEventListeners()
    this.loadTab()
  }

  initEventListeners () {
    document.querySelectorAll('.nav-tabs a').forEach((link) => {
      link.addEventListener('click', this.changeTab)
    })
  }

  changeTab (event) {
    /* if the browser supports history.pushState(), use it to update the URL
     with the fragment identifier, without triggering a scroll/jump */
    if (window.history && window.history.pushState) {
      /* an empty state object for now — either we implement a proper
       popstate handler ourselves, or wait for jQuery UI upstream */
      window.history.pushState({}, document.title, event.currentTarget.getAttribute('href'))
    } else {
      const scrolled = document.body.scrollTop
      window.location.hash = '#' + event.currentTarget.getAttribute('href').split('#')[1]
      document.body.scrollTop = scrolled
    }
    event.currentTarget.tab('show')
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
