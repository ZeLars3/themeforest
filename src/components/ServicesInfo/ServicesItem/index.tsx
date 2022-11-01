import { FC } from 'react'
import { useLocation, Location } from 'react-router-dom'

import { IServicesItem } from '@/types'
import ArrowRightSmall from '@/assets/icons/arrowRightSmall.png'
import { Svgr } from '@/components/common'

import {
  Icon,
  ServiceItemContainer,
  ServiceItemLink,
  ServiceItemText,
  ServiceItemTitle,
  Button,
} from './styled'

export const ServicesItem: FC<IServicesItem> = ({
  id,
  title,
  text,
  icon,
}) => {
  const location: Location = useLocation()

  return (
    <ServiceItemContainer>
      <Svgr icon={icon} />
      <ServiceItemTitle>{title}</ServiceItemTitle>
      <ServiceItemText>{text}</ServiceItemText>
      <ServiceItemLink
        href={location.pathname + `/id=${id}`}>
        <Button>
          Read more <Icon src={ArrowRightSmall} />
        </Button>
      </ServiceItemLink>
    </ServiceItemContainer>
  )
}
