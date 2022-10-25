import { FC, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import ArrowLeft from 'assets/icons/arrowLeft.png'
import ArrowRight from 'assets/icons/arrowRight.png'
import {
  SWIPER_CONFIG,
  TESTIMONIAL_ITEMS,
} from 'constants/index'
import { RootState } from 'store'

import {
  AboutUsSayContainer,
  AboutUsSayWrapper,
  AboutUsSayTitle,
  AboutUsSayController,
  AboutUsSayButton,
  Icon,
  AboutUsSayList,
} from './styled'
import { AboutUsSayItem } from './AboutUsSayItem'

SwiperCore.use([Navigation])

export const AboutUsSay: FC = () => {
  const navigationPrevRef = useRef <HTMLButtonElement>(null)
  const navigationNextRef = useRef<HTMLButtonElement>(null)

  const currentViewport = useSelector<RootState, string>(
    ({ app }) => app.viewport
  )

  return (
    <AboutUsSayContainer>
      <AboutUsSayWrapper>
        <AboutUsSayTitle>
          What our customers say
        </AboutUsSayTitle>
        {currentViewport === 'desktop' ? (
          <AboutUsSayController>
            <AboutUsSayButton
              disabled={true}
              ref={navigationPrevRef}>
              <Icon src={ArrowLeft} />
            </AboutUsSayButton>
            <AboutUsSayButton ref={navigationNextRef}>
              <Icon src={ArrowRight} />
            </AboutUsSayButton>
          </AboutUsSayController>
        ) : null}
      </AboutUsSayWrapper>
      <AboutUsSayList>
        <Swiper
          navigation={SWIPER_CONFIG.setCustomNavigation(
            navigationPrevRef,
            navigationNextRef,
          )}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl =
              navigationPrevRef.current
            swiper.params.navigation.nextEl =
              navigationNextRef.current
          }}
          centeredSlidesBounds={
            SWIPER_CONFIG.centeredSlidesBounds
          }
          spaceBetween={SWIPER_CONFIG.spaceBetweenComment}
          breakpoints={SWIPER_CONFIG.commentsPoints}
          grabCursor={SWIPER_CONFIG.grabCursor}
          scrollbar={SWIPER_CONFIG.scrollbar}
          modules={SWIPER_CONFIG.modules}
          style={SWIPER_CONFIG.commentSliderStyles}>
          {TESTIMONIAL_ITEMS.map(
            ({ name, position, text, avatar }) => (
              <SwiperSlide key={uuidv4()}>
                <AboutUsSayItem
                  name={name}
                  position={position}
                  avatar={avatar}
                  text={text}
                />
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </AboutUsSayList>
    </AboutUsSayContainer>
  )
}
