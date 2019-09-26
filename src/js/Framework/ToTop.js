export class ToTop {
  constructor () {
    $(window).on('scroll', this.toTop);
  }

  toTop () {
    if ($(this).scrollTop() > 1000) {
      $('[data-role="back-to-top"]').removeClass('d-none').addClass('show')
    } else {
      $('[data-role="back-to-top"]').addClass('d-none').removeClass('show')
    }
  }
}
