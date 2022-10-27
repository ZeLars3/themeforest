import { FC } from 'react'

import { Routes } from 'enums'
import { ITeamItem } from 'types'

import {
  OurTeamItemContainer,
  OurTeamItemPosition,
  OurTeamItemWrapper,
  OurTeamItemName,
  OurTeamItemLink,
} from './styled'

export const OurTeamItem: FC<ITeamItem> = ({
  name,
  position,
  avatar,
  id,
  isMargin,
}) => {
  return (
    <OurTeamItemContainer
      avatar={avatar}
      isMargin={isMargin}>
      <OurTeamItemWrapper>
        <OurTeamItemName>
          <OurTeamItemLink
            href={Routes.OurTeam + '/id=' + id}>
            {name}
          </OurTeamItemLink>
        </OurTeamItemName>
        <OurTeamItemPosition>
          {position}
        </OurTeamItemPosition>
      </OurTeamItemWrapper>
    </OurTeamItemContainer>
  )
}
