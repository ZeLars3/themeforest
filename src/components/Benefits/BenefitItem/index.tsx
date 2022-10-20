import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { IBenefitItem } from 'types'

import {
  BenefitItemText,
  BenefitItemTitle,
  BenefitListItem,
  Icon,
} from './styled'

export const BenefitItem: FC<IBenefitItem> = ({
  title,
  text,
  icon,
}) => {
  return (
    <BenefitListItem key={uuidv4()}>
      <Icon src={icon} />
      <BenefitItemTitle>{title}</BenefitItemTitle>
      <BenefitItemText>{text}</BenefitItemText>
    </BenefitListItem>
  )
}
