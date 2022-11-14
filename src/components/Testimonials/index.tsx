import { FC, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import ArrowLeft from '@/assets/icons/arrowLeft.png'
import ArrowRight from '@/assets/icons/arrowRight.png'
import {
  SWIPER_CONFIG,
  TESTIMONIAL_ITEMS,
} from '@/constants/index'

import {
  TestimonialButton,
  TestimonialsContainer,
  TestimonialsController,
  TestimonialsList,
  TestimonialsTitle,
  TestimonialsWrapper,
  Icon,
} from './styled'
import { TestimonialItem } from './TestimonialItem'

SwiperCore.use([Navigation])

export const Testimonials: FC = () => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null)
  const navigationNextRef = useRef<HTMLButtonElement>(null)

  return (
    <TestimonialsContainer>
      <TestimonialsWrapper direction={'row'}>
        <TestimonialsTitle variant="h2">
          Testimonials
        </TestimonialsTitle>
        <TestimonialsController direction={'row'}>
          <TestimonialButton ref={navigationPrevRef}>
            <Icon src={ArrowLeft} alt="previous slide" />
          </TestimonialButton>
          <TestimonialButton ref={navigationNextRef}>
            <Icon src={ArrowRight} alt="next slide" />
          </TestimonialButton>
        </TestimonialsController>
      </TestimonialsWrapper>
      <TestimonialsList>
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
          spaceBetween={SWIPER_CONFIG.spaceBetweenZero}
          breakpoints={SWIPER_CONFIG.breakPoints}
          grabCursor={SWIPER_CONFIG.grabCursor}
          scrollbar={SWIPER_CONFIG.scrollbar}
          modules={SWIPER_CONFIG.modules}>
          {TESTIMONIAL_ITEMS.map(
            ({ name, position, text, avatar }) => (
              <SwiperSlide key={uuidv4()}>
                <TestimonialItem
                  name={name}
                  position={position}
                  avatar={avatar}
                  text={text}
                />
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </TestimonialsList>
    </TestimonialsContainer>
  )
}
