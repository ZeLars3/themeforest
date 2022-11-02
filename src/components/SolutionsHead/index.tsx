import { FC } from 'react'

import { Routes } from '@/enums'
import { useTypedSelector } from '@/hooks'

import {
  SolutionsHeadContainer,
  SolutionsHeadLink,
  SolutionsHeadPath,
  SolutionsHeadSubtitle,
  SolutionsHeadText,
  SolutionsHeadTitle,
  SolutionsHeadWrapper,
} from './styled'

export const SolutionsHead: FC = () => {
  const currentViewport: string = useTypedSelector(
    ({ app }) => app.viewport,
  )

  return (
    <SolutionsHeadContainer>
      <SolutionsHeadWrapper>
        <SolutionsHeadPath>
          <SolutionsHeadLink href={Routes.Home}>
            Home
          </SolutionsHeadLink>{' '}
          | solutions
        </SolutionsHeadPath>
        <SolutionsHeadText>Solutions</SolutionsHeadText>
        <SolutionsHeadTitle>
          Data analytics solutions
        </SolutionsHeadTitle>
        <SolutionsHeadSubtitle>
          {currentViewport === 'desktop'
            ? `Getting ready for your success, we provide truly
            outstanding IT solutions.`
            : `Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium.`}
        </SolutionsHeadSubtitle>
      </SolutionsHeadWrapper>
    </SolutionsHeadContainer>
  )
}
