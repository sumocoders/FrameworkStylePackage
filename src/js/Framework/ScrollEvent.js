import requestAnimationFrame from 'requestanimationframe'
import { ToTop } from './ToTop'

export class ScrollEvent {
  constructor () {
    this.ticking = false

    let toTop = new ToTop()

    this.calculate = () => {
      toTop.scrollToTop()

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
