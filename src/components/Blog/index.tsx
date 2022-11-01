import { FC, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSelector } from 'react-redux'
import {
  NavigateFunction,
  useNavigate,
} from 'react-router-dom'

import ArrowLeft from '@/assets/icons/arrowLeft.png'
import ArrowRight from '@/assets/icons/arrowRight.png'
import { SWIPER_CONFIG, BLOG_ITEMS } from '@/constants/index'
import { Routes } from '@/enums'
import { Button } from '@/components/common'
import { RootState } from '@/store'

import { BlogItem } from './BlogItem'
import {
  BlogList,
  SelectButton,
  BlogContainer,
  BlogController,
  BlogTitle,
  BlogWrapperText,
  Icon,
  BlogWrapper,
  ButtonWrapper,
} from './styled'

export const Blog: FC = () => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  const navigate: NavigateFunction = useNavigate()

  const currentViewport = useSelector<RootState, string>(
    ({ app }) => app.viewport
  )

  const handleNavigate = (): void => {
    navigate(Routes.Solutions)
  }

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
          {currentViewport === 'desktop' ? (
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
                ({ img, date, title, text, id }) => (
                  <SwiperSlide key={id}>
                    <BlogItem
                      img={img}
                      id={id}
                      date={date}
                      title={title}
                      text={text}
                    />
                  </SwiperSlide>
                ),
              )}
            </Swiper>
          ) : (
            BLOG_ITEMS.slice(0, 3).map(
              ({ img, date, title, text, id }) => (
                <BlogItem
                  key={id}
                  id={id}
                  img={img}
                  date={date}
                  title={title}
                  text={text}
                />
              ),
            )
          )}
        </BlogList>
        {currentViewport === 'desktop' ? null : (
          <ButtonWrapper>
            <Button
              size="big"
              btnType="square"
              clickHandle={handleNavigate}>
              Learn more
            </Button>
          </ButtonWrapper>
        )}
      </BlogWrapper>
    </BlogContainer>
  )
}
