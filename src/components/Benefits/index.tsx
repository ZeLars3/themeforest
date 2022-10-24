import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
  BENEFIT_ITEMS,
  SWIPER_CONFIG,
} from 'constants/index'

import { BenefitItem } from './BenefitItem'
import {
  BenefitsContainer,
  BenefitsList,
  BenefitsText,
  BenefitsTitle,
  BenefitsWrapper,
  GroupWrapper,
  TextWrapper,
} from './styled'
import { RootState } from 'store'

export const Benefits: FC = () => {
  const currentViewport = useSelector<RootState, string>(
    ({ app }) => app.viewport
  )

  return (
    <BenefitsContainer>
      <BenefitsWrapper>
        <TextWrapper>
          <BenefitsTitle>
            The benefits of Ensome
          </BenefitsTitle>
          <BenefitsText>
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
              <GroupWrapper>
                {BENEFIT_ITEMS.slice(0, 2).map(
                  ({ title, text, icon }) => (
                    <BenefitItem
                      key={uuidv4()}
                      title={title}
                      text={text}
                      icon={icon}
                    />
                  ),
                )}
              </GroupWrapper>
              <GroupWrapper>
                {BENEFIT_ITEMS.slice(2, 4).map(
                  ({ title, text, icon }) => (
                    <BenefitItem
                      key={uuidv4()}
                      title={title}
                      text={text}
                      icon={icon}
                    />
                  ),
                )}
              </GroupWrapper>
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
                ({ title, text, icon }) => (
                  <SwiperSlide key={uuidv4()}>
                    <BenefitItem
                      key={uuidv4()}
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
