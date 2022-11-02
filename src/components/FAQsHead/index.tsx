import { FC } from 'react'

import { useTypedSelector } from '@/hooks'
import { Routes } from '@/enums'

import {
  FAQsHeadContainer,
  FAQsHeadLink,
  FAQsHeadPath,
  FAQsHeadSubtitle,
  FAQsHeadText,
  FAQsHeadTitle,
  FAQsHeadWrapper,
} from './styled'

export const FAQsHead: FC = () => {
  const currentViewport: string = useTypedSelector(
    ({ app }) => app.viewport,
  )

  return (
    <FAQsHeadContainer>
      <FAQsHeadWrapper>
        <FAQsHeadPath>
          <FAQsHeadLink href={Routes.Home}>
            Home
          </FAQsHeadLink>{' '}
          | FAQs
        </FAQsHeadPath>
        <FAQsHeadText>FAQs</FAQsHeadText>
        <FAQsHeadTitle>
          Frequently asked questions
        </FAQsHeadTitle>
        <FAQsHeadSubtitle>
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
