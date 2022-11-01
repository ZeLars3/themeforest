import { FC } from 'react'

import { ServicesItem } from '@/components/ServicesInfo/ServicesItem'
import { SOLUTION_ITEMS } from '@/constants/index'

import {
  SolutionsListWrapper,
  SolutionsListContainer,
} from './styled'

export const SolutionsList: FC = () => {
  return (
    <SolutionsListContainer>
      <SolutionsListWrapper>
        {SOLUTION_ITEMS.map(({ id, title, text, icon }) => (
          <ServicesItem
            key={id}
            id={id}
            icon={icon}
            title={title}
            text={text}
          />
        ))}
      </SolutionsListWrapper>
    </SolutionsListContainer>
  )
}
