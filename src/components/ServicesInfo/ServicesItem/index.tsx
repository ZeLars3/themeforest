import { FC } from 'react'

import { Routes } from 'enums'
import { IServicesItem } from 'types'
import ArrowRightSmall from 'assets/icons/arrowRightSmall.png'

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
  return (
    <ServiceItemContainer>
      <Icon src={icon} />
      <ServiceItemTitle>{title}</ServiceItemTitle>
      <ServiceItemText>{text}</ServiceItemText>
      <ServiceItemLink href={Routes.Services + '/id=' + id}>
        <Button>
          Read more <Icon src={ArrowRightSmall} />
        </Button>
      </ServiceItemLink>
    </ServiceItemContainer>
  )
}
