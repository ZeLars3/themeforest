import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {
  PRICING_ITEMS,
  SWIPER_CONFIG,
} from '@/constants/index'

import { PriceItem } from './PriceItem'
import {
  PriceList,
  PricingContainer,
  PricingTitle,
  PricingWrapper,
} from './styled'

SwiperCore.use([Navigation])

export const Pricing: FC = () => {
  return (
    <PricingContainer>
      <PricingWrapper>
        <PricingTitle variant="h2">
          Our pricing
        </PricingTitle>
        <PriceList>
          <Swiper
            spaceBetween={SWIPER_CONFIG.freeSpace}
            breakpoints={SWIPER_CONFIG.pricingBreakPoints}
            grabCursor={SWIPER_CONFIG.grabCursor}
            scrollbar={SWIPER_CONFIG.scrollbar}
            modules={SWIPER_CONFIG.modules}
            centeredSlidesBounds={
              SWIPER_CONFIG.centeredSlidesBounds
            }
            style={SWIPER_CONFIG.priceSliderStyles}>
            {PRICING_ITEMS.map(
              ({ id, title, price, features }) => (
                <SwiperSlide key={id}>
                  <PriceItem
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    features={features}
                  />
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </PriceList>
      </PricingWrapper>
    </PricingContainer>
  )
}
