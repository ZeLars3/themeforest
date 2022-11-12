import { FC } from 'react'

import { Routes } from '@/enums'
import { ITeamItem } from '@/types'

import {
  OurTeamItemContainer,
  OurTeamItemPosition,
  OurTeamItemWrapper,
  OurTeamItemLink,
} from './styled'

export const OurTeamItem: FC<ITeamItem> = ({
  name,
  position,
  avatar,
  id,
}) => {
  return (
    <OurTeamItemContainer>
      <OurTeamItemWrapper avatar={avatar}>
        <OurTeamItemLink
          variant="h4"
          underline="hover"
          href={Routes.OurTeam + '/id=' + id}>
          {name}
        </OurTeamItemLink>
        <OurTeamItemPosition variant="body1">
          {position}
        </OurTeamItemPosition>
      </OurTeamItemWrapper>
    </OurTeamItemContainer>
  )
}
