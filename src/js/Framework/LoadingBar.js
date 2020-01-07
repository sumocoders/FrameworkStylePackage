export class LoadingBar {
  constructor () {
    this.initEventListeners()
  }

  initEventListeners () {
    $(document).on(' form_submitting', $.proxy(this.showLoadingBar, this))
    $(document).on('ajax_start', $.proxy(this.showLoadingBar, this))
    $(document).on('ajax_stop', $.proxy(this.hideLoadingBar, this))
  }

  showLoadingBar () {
    $('[data-role="ajax-indicator"]').removeClass('d-none')
  }

  hideLoadingBar () {
    $('[data-role="ajax-indicator"]').addClass('d-none')
  }
}
