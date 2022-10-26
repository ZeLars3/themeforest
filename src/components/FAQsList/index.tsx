import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { FAQ_ITEMS } from 'constants/faqItems'

import { FAQsItem } from './FAQsItem'
import {
  FAQsListContainer,
  FAQsListWrapper,
} from './styled'

export const FAQsList: FC = () => {
  return (
    <FAQsListContainer>
      <FAQsListWrapper>
        {FAQ_ITEMS.map(({ title, text }) => {
          return (
            <FAQsItem
              key={uuidv4()}
              title={title}
              text={text}
            />
          )
        })}
      </FAQsListWrapper>
    </FAQsListContainer>
  )
}
