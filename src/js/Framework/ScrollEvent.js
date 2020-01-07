import requestAnimationFrame from 'requestanimationframe'
import {Scrolling} from './Scrolling'

export class ScrollEvent {
  constructor () {
    this.ticking = false

    const scrolling = new Scrolling()

    this.calculate = () => {
      scrolling.scrollToTop()

      this.ticking = false
    }

    this.scroll()
  }

  scroll () {
    $(window).on('scroll load', () => {
      this.tick()
    })
  }

  tick () {
    if (!this.ticking) {
      requestAnimationFrame(this.calculate)
      this.ticking = true
    }
  }
}
