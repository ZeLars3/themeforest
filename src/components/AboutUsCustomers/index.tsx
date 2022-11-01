import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
  SWIPER_CONFIG,
  STATISTIC_COMPANY_ICONS,
} from '@/constants/index'
import { RootState } from '@/store'

import {
  AboutUsCustomersContainer,
  AboutUsCustomersWrapper,
  AboutUsCustomersWrapperText,
  AboutUsCustomersTitle,
  AboutUsCustomersSubtitle,
  CompanyIcon,
  AboutUsCustomersList,
} from './styled'

export const AboutUsCustomers: FC = () => {
  const currentViewport = useSelector<RootState, string>(
    ({ app }) => app.viewport
  )

  return (
    <AboutUsCustomersContainer>
      <AboutUsCustomersWrapper>
        <AboutUsCustomersWrapperText>
          <AboutUsCustomersTitle>
            Our customers
          </AboutUsCustomersTitle>
          <AboutUsCustomersSubtitle>
            {currentViewport === 'desktop'
              ? `Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudan,
            totam rem aperiam.`
              : `Sed ut perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae
              ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.`}
          </AboutUsCustomersSubtitle>
        </AboutUsCustomersWrapperText>
        <AboutUsCustomersList>
          {currentViewport === 'desktop' ? (
            STATISTIC_COMPANY_ICONS.map(icon => (
              <CompanyIcon key={uuidv4()} src={icon} />
            ))
          ) : (
            <Swiper
              centeredSlidesBounds={
                SWIPER_CONFIG.centeredSlidesBounds
              }
              breakpoints={
                SWIPER_CONFIG.customersBreakPoints
              }
              grabCursor={SWIPER_CONFIG.grabCursor}
              scrollbar={SWIPER_CONFIG.scrollbar}
              modules={SWIPER_CONFIG.modules}>
              {STATISTIC_COMPANY_ICONS.map(icon => (
                <SwiperSlide key={uuidv4()}>
                  <CompanyIcon src={icon} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </AboutUsCustomersList>
      </AboutUsCustomersWrapper>
    </AboutUsCustomersContainer>
  )
}
