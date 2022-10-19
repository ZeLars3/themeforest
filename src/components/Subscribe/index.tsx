import { FC } from 'react'

import { SubscribeForm } from 'components/forms/SubscribeForm'

import {
  SubscribeContainer,
  SubscribeText,
  SubscribeTitle,
  SubscribeWrapper,
  SubscribeWrapperInner
} from './styled'

export const Subscribe: FC = () => {
  return (
    <SubscribeWrapper>
      <SubscribeContainer>
        <SubscribeWrapperInner>
          <SubscribeTitle>
            Subscribe to our newsletter
          </SubscribeTitle>
          <SubscribeText>
            Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque
            laudantium.
          </SubscribeText>
        </SubscribeWrapperInner>
        <SubscribeForm />
      </SubscribeContainer>
    </SubscribeWrapper>
  )
}
