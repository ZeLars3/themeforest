import { FC } from 'react'

import Plus from '@/assets/icons/plus.svg'
import Minus from '@/assets/icons/minus.svg'
import { IFAQsItem } from '@/types'
import { Svgr } from '@/components/common'

import {
  FAQsItemSubtitle,
  FAQsItemContainer,
  FAQsItemTitle,
} from './styled'

export const FAQsItem: FC<IFAQsItem> = ({
  title,
  text,
  isActive,
  handleClick,
}) => {
  return (
    <FAQsItemContainer onClick={handleClick}>
      <FAQsItemTitle
        variant="h4"
        isShow={isActive ?? false}>
        {title}
        <Svgr icon={isActive ? Minus : Plus} />
      </FAQsItemTitle>
      {isActive && (
        <FAQsItemSubtitle variant="h5">
          {text}
        </FAQsItemSubtitle>
      )}
    </FAQsItemContainer>
  )
}
