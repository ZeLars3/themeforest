import { FC, useCallback, useState } from 'react'

import { FAQ_ITEMS } from '@/constants/faqItems'

import { FAQsItem } from './FAQsItem'
import {
  FAQsListContainer,
  FAQsListWrapper,
} from './styled'

export const FAQsList: FC = () => {
  const [activeId, setActiveId] = useState <number>(0)

  const handleClickDropdown = (id: number) => (): void =>
    setActiveId((prevId: number) =>
      prevId === id ? 0 : id,
    )

  return (
    <FAQsListContainer>
      <FAQsListWrapper>
        {FAQ_ITEMS.map(({ title, text, id }) => (
          <FAQsItem
            key={id}
            id={id}
            title={title}
            text={text}
            isActive={activeId === id}
            handleClick={handleClickDropdown(Number(id))}
          />
        ))}
      </FAQsListWrapper>
    </FAQsListContainer>
  )
}
