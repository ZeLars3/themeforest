import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { TEAM_ITEMS } from 'constants/teamItems'

import { OurTeamItem } from './OurTeamItem'
import {
  OurTeamListContainer,
  OurTeamListWrapper,
} from './styled'

export const OurTeamList: FC = () => {
  return (
    <OurTeamListContainer>
      <OurTeamListWrapper>
        {TEAM_ITEMS.map(({ id, ...restProps }, index) => (
          <OurTeamItem
            key={uuidv4()}
            id={id}
            {...restProps}
            isMargin={index === 1 || (index - 1) % 3 === 0}
          />
        ))}
      </OurTeamListWrapper>
    </OurTeamListContainer>
  )
}
