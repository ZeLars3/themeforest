import { FC } from 'react'

import { FAQ_ITEMS } from '@/constants/faqItems'

import { FAQsItem } from './FAQsItem'
import {
  FAQsListContainer,
  FAQsListWrapper,
} from './styled'

export const FAQsList: FC = () => {
  return (
    <FAQsListContainer>
      <FAQsListWrapper>
        {FAQ_ITEMS.map(({ title, text, id }) => (
          <FAQsItem
            key={id}
            id={id}
            title={title}
            text={text}
          />
        ))}
      </FAQsListWrapper>
    </FAQsListContainer>
  )
}
