import { FC } from 'react'

import { Routes } from '@/enums'
import { useTypedSelector } from '@/hooks'

import { Breadcrumbs } from '../common'
import {
  SolutionsHeadContainer,
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
        <Breadcrumbs
          path={Routes.Home}
          currentPage={'Solutions'}
          color={'black'}
        />
        <SolutionsHeadText variant="h6">
          Solutions
        </SolutionsHeadText>
        <SolutionsHeadTitle variant="h1">
          Data analytics solutions
        </SolutionsHeadTitle>
        <SolutionsHeadSubtitle variant="h5">
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
