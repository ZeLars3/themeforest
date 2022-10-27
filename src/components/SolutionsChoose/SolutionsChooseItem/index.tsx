import { FC } from 'react'

import { ISolutionItem } from 'types'
import Checkmark from 'assets/icons/checkmark.svg'

import {
  SolutionsChooseItemWrapper,
  SolutionsChooseItemText,
  SolutionsChooseItemTitle,
  Icon,
} from './styled'

export const SolutionsChooseItem: FC<ISolutionItem> = ({
  title,
  text,
}) => {
  return (
    <SolutionsChooseItemWrapper>
      <SolutionsChooseItemTitle>
        <Icon src={Checkmark} />
        {title}
      </SolutionsChooseItemTitle>
      <SolutionsChooseItemText>
        {text}
      </SolutionsChooseItemText>
    </SolutionsChooseItemWrapper>
  )
}
