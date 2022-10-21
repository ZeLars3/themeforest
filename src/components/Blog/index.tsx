import { FC, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { v4 as uuidv4 } from 'uuid'

import ArrowLeft from 'assets/icons/arrowLeft.png'
import ArrowRight from 'assets/icons/arrowRight.png'
import { SWIPER_CONFIG, BLOG_ITEMS } from 'constants/index'

import { BlogItem } from './BlogItem'
import {
  BlogList,
  SelectButton,
  BlogContainer,
  BlogController,
  BlogTitle,
  BlogWrapperText,
  Icon,
  BlogWrapper
} from './styled'

export const Blog: FC = () => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <BlogContainer>
      <BlogWrapper>
        <BlogWrapperText>
          <BlogTitle>Our blog</BlogTitle>
          <BlogController>
            <SelectButton ref={navigationPrevRef}>
              <Icon src={ArrowLeft} />
            </SelectButton>
            <SelectButton ref={navigationNextRef}>
              <Icon src={ArrowRight} />
            </SelectButton>
          </BlogController>
        </BlogWrapperText>
        <BlogList>
          {
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
              {BLOG_ITEMS.map(
                ({ img, date, title, text }) => (
                  <SwiperSlide key={uuidv4()}>
                    <BlogItem
                      img={img}
                      date={date}
                      title={title}
                      text={text}
                    />
                  </SwiperSlide>
                ),
              )}
            </Swiper>
          }
        </BlogList>
      </BlogWrapper>
    </BlogContainer>
  )
}
