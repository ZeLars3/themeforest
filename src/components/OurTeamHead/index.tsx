import { FC } from 'react'

import { Routes } from '@/enums'

import { Breadcrumbs } from '../common'
import {
  OutTeamHeadContainer,
  OutTeamHeadWrapper,
  OutTeamHeadWrapperText,
  OutTeamHeadTitle,
  OutTeamHeadSubtitle,
  OutTeamHeadItem,
} from './styled'

export const OutTeamHead: FC = () => {
  return (
    <OutTeamHeadContainer>
      <OutTeamHeadWrapper>
        <Breadcrumbs
          path={Routes.Home}
          currentPage={'Our Team'}
          color='white'
        />
        <OutTeamHeadWrapperText direction="row">
          <OutTeamHeadItem>
            <OutTeamHeadTitle variant="h1">
              Our team
            </OutTeamHeadTitle>
          </OutTeamHeadItem>
          <OutTeamHeadSubtitle variant="subtitle2">
            Sed ut perspiciatis unde omnis iste natus error
            volupta accusantium doloremque laudantium, totam
            remiga aperiam, eaque ipsa. Phasellus tristique
            eu nisl eu consectetur.
            <br />
            <br />
            Morbi urna massa, imperdiet in mauris et,
            euismod vestibulum lacus. Integer enim elit,
            tincidunt aliquam ligula id, lacinia auctor
            orci. Sed quis lobortis eros. Fusce id commodo
            libero.
          </OutTeamHeadSubtitle>
        </OutTeamHeadWrapperText>
      </OutTeamHeadWrapper>
    </OutTeamHeadContainer>
  )
}
