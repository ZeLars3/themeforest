import { FC } from 'react'

import { Routes } from 'enums'

import {
  SolutionSingleHeadContainer,
  SolutionSingleHeadLink,
  SolutionSingleHeadPath,
  SolutionSingleHeadTitle,
  SolutionSingleHeadWrapper,
} from './styled'

export const SolutionSingleHead: FC<{ title: string }> = ({
  title,
}) => {
  return (
    <SolutionSingleHeadContainer>
      <SolutionSingleHeadWrapper>
        <SolutionSingleHeadTitle>
          {title}
        </SolutionSingleHeadTitle>
        <SolutionSingleHeadPath>
          <SolutionSingleHeadLink href={Routes.Home}>
            Home
          </SolutionSingleHeadLink>{' '}
          | {title}
        </SolutionSingleHeadPath>
      </SolutionSingleHeadWrapper>
    </SolutionSingleHeadContainer>
  )
}
