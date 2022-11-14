import { FC } from 'react'

import { Routes } from '@/enums'

import { Breadcrumbs } from '../common'
import {
  SolutionSingleHeadContainer,
  SolutionSingleHeadTitle,
  SolutionSingleHeadWrapper,
} from './styled'

export const SolutionSingleHead: FC<{ title: string }> = ({
  title,
}) => {
  return (
    <SolutionSingleHeadContainer>
      <SolutionSingleHeadWrapper>
        <SolutionSingleHeadTitle variant="h1">
          {title}
        </SolutionSingleHeadTitle>
        <Breadcrumbs
          path={Routes.Home}
          currentPage={title}
          color={'black'}
        />
      </SolutionSingleHeadWrapper>
    </SolutionSingleHeadContainer>
  )
}
