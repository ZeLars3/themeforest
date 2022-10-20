import { RefObject } from 'react'
import { A11y, Navigation } from 'swiper'

export const SWIPER_CONFIG = {
  modules: [A11y, Navigation],
  breakPoints: {
    360: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1110: {
      slidesPerView: 3
    }
  },
  centeredSlidesBounds: true,
  scrollbar: { draggable: true },
  grabCursor: true,
  freeSpace: -40,
  spaceBetweenZero: 0,
  setCustomNavigation(
    prev: RefObject<HTMLButtonElement>,
    next: RefObject<HTMLButtonElement>
  ) {
    return {
      prevEl: prev.current,
      nextEl: next.current
    }
  }
}
