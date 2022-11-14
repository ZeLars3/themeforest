import { FC } from 'react'

import { SubscribeForm } from '@/components/forms/SubscribeForm'

import {
  SubscribeContainer,
  SubscribeText,
  SubscribeTitle,
  SubscribeWrapper,
  SubscribeWrapperInner,
} from './styled'

export const Subscribe: FC<{
  background: 'primary' | 'secondary',
}> = ({ background }) => {
  return (
    <SubscribeContainer background={background}>
      <SubscribeWrapper direction="row">
        <SubscribeWrapperInner>
          <SubscribeTitle
            variant="h2"
            color={'common.white'}>
            Subscribe to our newsletter
          </SubscribeTitle>
          <SubscribeText
            variant="h5"
            color={'common.white'}>
            Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque
            laudantium.
          </SubscribeText>
        </SubscribeWrapperInner>
        <SubscribeForm />
      </SubscribeWrapper>
    </SubscribeContainer>
  )
}
