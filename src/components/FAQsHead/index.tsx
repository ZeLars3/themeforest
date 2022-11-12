import { FC } from 'react'

import { useTypedSelector } from '@/hooks'
import { Routes } from '@/enums'

import {
  FAQsHeadContainer,
  FAQsHeadSubtitle,
  FAQsHeadText,
  FAQsHeadTitle,
  FAQsHeadWrapper,
} from './styled'
import { Breadcrumbs } from '../common'

export const FAQsHead: FC = () => {
  const currentViewport: string = useTypedSelector(
    ({ app }) => app.viewport,
  )

  return (
    <FAQsHeadContainer>
      <FAQsHeadWrapper>
        <Breadcrumbs
          path={Routes.Home}
          currentPage={'FAQs'}
          color="black"
        />
        <FAQsHeadText variant="h6" color={'primary'}>
          FAQs
        </FAQsHeadText>
        <FAQsHeadTitle variant="h1">
          Frequently asked questions
        </FAQsHeadTitle>
        <FAQsHeadSubtitle variant="h5">
          {currentViewport === 'desktop'
            ? `Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium
            totam.`
            : `Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium.`}
        </FAQsHeadSubtitle>
      </FAQsHeadWrapper>
    </FAQsHeadContainer>
  )
}
