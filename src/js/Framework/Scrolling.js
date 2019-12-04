export class Scrolling {
  constructor () {
    this.initEventListeners()
  }

  initEventListeners () {
    $('a[href*=\\#]').on('click', $.proxy(this.scrollTo, this))
  }

  scrollTo (event) {
    let $anchor = $(event.currentTarget)
    let href = $anchor.attr('href')
    let url = href.substr(0, href.indexOf('#'))
    let hash = href.substr(href.indexOf('#'))

    // If the hash is only a hash, there's nowhere to go to
    if (hash === '#') {
      return
    }

    /* check if we have an url, and if it is on the current page and the element exists disabled for nav-tabs */
    if (
      (url === '' || url.indexOf(document.location.pathname) >= 0) &&
      !$anchor.is('[data-no-scroll]') &&
      $(hash).length > 0
    ) {
      let $htmlBody = $('html, body')
      $htmlBody.stop()
      $htmlBody.animate(
        {
          scrollTop: $(hash).offset().top
        },
        500
      )
    }
  }

  scrollToTop () {
    if ($(window).scrollTop() > 1000) {
      $('[data-role="back-to-top"]').removeClass('d-none').addClass('show')
    } else {
      $('[data-role="back-to-top"]').addClass('d-none').removeClass('show')
    }
  }
}
