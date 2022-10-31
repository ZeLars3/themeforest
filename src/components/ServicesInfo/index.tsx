import { FC } from 'react'

import { SERVICES_ITEMS } from 'constants/index'

import {
  ServicesInfoContainer,
  ServicesInfoSubtitle,
  ServicesInfoText,
  ServicesInfoTitle,
  ServicesInfoWrapper,
  ServicesInfoWrapperHead,
  ServicesInfoList,
} from './styled'
import { ServicesItem } from './ServicesItem'

export const ServicesInfo: FC = () => {
  return (
    <ServicesInfoContainer>
      <ServicesInfoWrapper>
        <ServicesInfoWrapperHead>
          <ServicesInfoText>Services</ServicesInfoText>
          <ServicesInfoTitle>
            Data Analytics Services
          </ServicesInfoTitle>
          <ServicesInfoSubtitle>
            Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quaeab
            illo inventore.
          </ServicesInfoSubtitle>
        </ServicesInfoWrapperHead>
        <ServicesInfoList>
          {SERVICES_ITEMS.map(
            ({ id, title, text, icon }) => (
              <ServicesItem
                key={id}
                id={id}
                icon={icon}
                title={title}
                text={text}
              />
            ),
          )}
        </ServicesInfoList>
      </ServicesInfoWrapper>
    </ServicesInfoContainer>
  )
}
