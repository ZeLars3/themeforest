import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { SOCIAL_MEDIA_ICONS } from 'constants/socialMediaIcons'

import {
  SocialLinksIcon,
  SocialLinksContainer,
  SocialLinksTitle,
} from './styled'

export const SocialLinks: FC = () => {
  return (
    <SocialLinksContainer>
      <SocialLinksTitle>Follow us</SocialLinksTitle>
      {SOCIAL_MEDIA_ICONS.map((path) => (
        <SocialLinksIcon
          alt={`${path}icon`}
          src={path}
          key={uuidv4()}
        />
      ))}
    </SocialLinksContainer>
  )
}
