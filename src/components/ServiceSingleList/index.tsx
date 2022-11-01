import { FC, Fragment } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { SERVICE_SINLE_ITEMS } from '@/constants/index'
import Checkmark from '@/assets/icons/checkmark.svg'

import {
  ServiceInfoSectionImage,
  ServiceInfoSectionText,
  ServiceInfoSectionTitle,
  SolutionFeatureItem,
  SolutionFeatures,
  ServiceSingleListWrapper,
} from './styled'
import { Svgr } from '../common'

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
              {list != null && (
                <SolutionFeatures>
                  {list.map(feature => (
                    <SolutionFeatureItem key={uuidv4()}>
                      <Svgr icon={Checkmark} />
                      {feature}
                    </SolutionFeatureItem>
                  ))}
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
