import { FC } from 'react'

import { Routes } from 'enums'

import {
  AboutUsHeadContainer,
  AboutUsHeadLink,
  AboutUsHeadPath,
  AboutUsHeadTitle,
  AboutUsHeadWrapper,
} from './styled'

export const AboutUsHead: FC = () => {
  return (
    <AboutUsHeadContainer>
      <AboutUsHeadWrapper>
        <AboutUsHeadTitle>About Us</AboutUsHeadTitle>
        <AboutUsHeadPath>
          <AboutUsHeadLink href={Routes.Home}>
            Home
          </AboutUsHeadLink>{' '}
          | About Us
        </AboutUsHeadPath>
      </AboutUsHeadWrapper>
    </AboutUsHeadContainer>
  )
}
