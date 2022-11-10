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
  customersBreakPoints: {
    360: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 6
    },
    1110: {
      slidesPerView: 6
    }
  },
  pricingBreakPoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: -40,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1110: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  benefitsPoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: -40,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
  commentsPoints: {
    360: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1110: {
      slidesPerView: 2,
    },
  },
  centeredSlidesBounds: true,
  scrollbar: { draggable: true },
  grabCursor: true,
  freeSpace: -40,
  spaceBetweenZero: 0,
  spaceBetweenComment: 30,
  setCustomNavigation (
    prev: RefObject<HTMLButtonElement>,
    next: RefObject<HTMLButtonElement>
  ) {
    return {
      prevEl: prev.current,
      nextEl: next.current
    }
  },
  priceSliderStyles: {
    width: '100%',
    padding: '10px',
  },
  commentSliderStyles: {
    width: '100%',
    padding: '20px 0 0 0',
  }
}
