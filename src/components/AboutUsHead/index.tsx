import { FC } from 'react'

import { Routes } from '@/enums'

import {
  AboutUsHeadContainer,
  AboutUsHeadTitle,
  AboutUsHeadWrapper,
} from './styled'
import { Breadcrumbs } from '../common'

export const AboutUsHead: FC = () => {
  return (
    <AboutUsHeadContainer>
      <AboutUsHeadWrapper>
        <AboutUsHeadTitle variant="h1">
          About Us
        </AboutUsHeadTitle>
        <Breadcrumbs
          path={Routes.Home}
          currentPage={'About Us'}
          color={'black'}
        />
      </AboutUsHeadWrapper>
    </AboutUsHeadContainer>
  )
}
