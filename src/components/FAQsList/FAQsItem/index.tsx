import { FC, useState } from 'react'

import Plus from 'assets/icons/plus.svg'
import Minus from 'assets/icons/minus.svg'
import { IFAQsItem } from 'types'

import {
  FAQsItemSubtitle,
  FAQsItemContainer,
  FAQsItemTitle,
  Icon,
} from './styled'

export const FAQsItem: FC<IFAQsItem> = ({
  title,
  text,
}) => {
  const [isShow, setIsShow] = useState<boolean>(false)

  const handleClickItem = (): void => {
    setIsShow(!isShow)
  }

  return (
    <FAQsItemContainer onClick={handleClickItem}>
      <FAQsItemTitle isShow={isShow}>
        {title}
        <Icon src={isShow ? Minus : Plus} />
      </FAQsItemTitle>
      {isShow && (
        <FAQsItemSubtitle>{text}</FAQsItemSubtitle>
      )}
    </FAQsItemContainer>
  )
}
