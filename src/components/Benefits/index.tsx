import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
  BENEFIT_ITEMS,
  SWIPER_CONFIG,
} from '@/constants/index'
import { useTypedSelector } from '@/hooks'

import { BenefitItem } from './BenefitItem'
import {
  BenefitsContainer,
  BenefitsList,
  BenefitsText,
  BenefitsTitle,
  BenefitsWrapper,
  TextWrapper,
} from './styled'

export const Benefits: FC = () => {
  const currentViewport: string = useTypedSelector(
    ({ app }) => app.viewport,
  )

  return (
    <BenefitsContainer>
      <BenefitsWrapper direction={'row'}>
        <TextWrapper>
          <BenefitsTitle variant="h2">
            The benefits of Ensome
          </BenefitsTitle>
          <BenefitsText variant="h5">
            Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </BenefitsText>
        </TextWrapper>
        <BenefitsList>
          {currentViewport === 'desktop' ? (
            <>
              {BENEFIT_ITEMS.map(
                ({ title, text, icon, id }) => (
                  <BenefitItem
                    key={id}
                    id={id}
                    title={title}
                    text={text}
                    icon={icon}
                  />
                ),
              )}
            </>
          ) : (
            <Swiper
              centeredSlidesBounds={
                SWIPER_CONFIG.centeredSlidesBounds
              }
              spaceBetween={SWIPER_CONFIG.spaceBetweenZero}
              breakpoints={SWIPER_CONFIG.benefitsPoints}
              grabCursor={SWIPER_CONFIG.grabCursor}
              scrollbar={SWIPER_CONFIG.scrollbar}
              modules={SWIPER_CONFIG.modules}>
              {BENEFIT_ITEMS.map(
                ({ title, text, icon, id }) => (
                  <SwiperSlide key={id}>
                    <BenefitItem
                      key={id}
                      id={id}
                      title={title}
                      text={text}
                      icon={icon}
                    />
                  </SwiperSlide>
                ),
              )}
            </Swiper>
          )}
        </BenefitsList>
      </BenefitsWrapper>
    </BenefitsContainer>
  )
}
