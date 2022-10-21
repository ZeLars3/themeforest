import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
  PRICING_ITEMS,
  SWIPER_CONFIG,
} from 'constants/index'

import { PriceItem } from './PriceItem'
import {
  PriceList,
  PricingContainer,
  PricingTitle,
  PricingWrapper,
} from './styled'

export const Pricing: FC = () => {
  return (
    <PricingContainer>
      <PricingWrapper>
        <PricingTitle>Our pricing</PricingTitle>
        <PriceList>
          <Swiper
            spaceBetween={SWIPER_CONFIG.spaceBetweenZero}
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
                <SwiperSlide key={uuidv4()}>
                  <PriceItem
                    key={uuidv4()}
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
