import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useTypedSelector } from '@/hooks'
import {
  SWIPER_CONFIG,
  STATISTIC_COMPANY_ICONS,
} from '@/constants/index'

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
  const currentViewport = useTypedSelector(
    ({ app }) => app.viewport,
  )

  return (
    <AboutUsCustomersContainer>
      <AboutUsCustomersWrapper>
        <AboutUsCustomersWrapperText>
          <AboutUsCustomersTitle variant="h1">
            Our customers
          </AboutUsCustomersTitle>
          <AboutUsCustomersSubtitle variant="h5">
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
              {STATISTIC_COMPANY_ICONS.map((icon) => (
                <SwiperSlide key={uuidv4()}>
                  <CompanyIcon src={icon} alt="company" />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </AboutUsCustomersList>
      </AboutUsCustomersWrapper>
    </AboutUsCustomersContainer>
  )
}
