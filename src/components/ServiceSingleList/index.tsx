import { FC, Fragment } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { SERVICE_SINLE_ITEMS } from 'constants/index'
import Checkmark from 'assets/icons/checkmark.svg'

import {
  ServiceInfoSectionImage,
  ServiceInfoSectionText,
  ServiceInfoSectionTitle,
  SolutionFeatureItem,
  SolutionFeatures,
  Icon,
  ServiceSingleListWrapper,
} from './styled'

export const ServiceSingleList: FC = () => {
  return (
    <ServiceSingleListWrapper>
      {SERVICE_SINLE_ITEMS.map(
        ({ title, text, list, img, id }) => {
          return (
            <Fragment key={id}>
              <ServiceInfoSectionTitle>
                {title}
              </ServiceInfoSectionTitle>
              <ServiceInfoSectionText>
                {text}
              </ServiceInfoSectionText>
              {list && (
                <SolutionFeatures>
                  {list.map((feature) => {
                    return (
                      <SolutionFeatureItem key={uuidv4()}>
                        <Icon src={Checkmark} />
                        {feature}
                      </SolutionFeatureItem>
                    )
                  })}
                </SolutionFeatures>
              )}
              {img && <ServiceInfoSectionImage src={img} />}
            </Fragment>
          )
        },
      )}
    </ServiceSingleListWrapper>
  )
}
