import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ServicesItem } from 'components/ServicesInfo/ServicesItem'

import { SOLUTION_ITEMS } from 'constants/index'
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
            key={uuidv4()}
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
