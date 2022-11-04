import { FC } from 'react'

import { IBenefitItem } from '@/types'

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
  id,
}) => {
  return (
    <BenefitListItem key={id}>
      <Icon src={icon} alt={title} />
      <BenefitItemTitle>{title}</BenefitItemTitle>
      <BenefitItemText>{text}</BenefitItemText>
    </BenefitListItem>
  )
}
