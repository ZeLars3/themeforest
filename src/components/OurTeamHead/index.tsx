import { FC } from 'react'

import { Routes } from '@/enums'

import {
  OutTeamHeadContainer,
  OutTeamHeadWrapper,
  OutTeamHeadPath,
  OutTeamHeadLink,
  OutTeamHeadWrapperText,
  OutTeamHeadTitle,
  OutTeamHeadSubtitle,
  OutTeamHeadItem,
} from './styled'

export const OutTeamHead: FC = () => {
  return (
    <OutTeamHeadContainer>
      <OutTeamHeadWrapper>
        <OutTeamHeadPath>
          <OutTeamHeadLink href={Routes.Home}>
            Home
          </OutTeamHeadLink>{' '}
          | Our Team
        </OutTeamHeadPath>
        <OutTeamHeadWrapperText>
          <OutTeamHeadItem>
            <OutTeamHeadTitle>Our team</OutTeamHeadTitle>
          </OutTeamHeadItem>
          <OutTeamHeadSubtitle>
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
