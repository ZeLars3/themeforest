import { FC } from 'react'
import {
  NavigateFunction,
  useNavigate,
} from 'react-router-dom'

import { Button } from '@/components/common'
import { Routes } from '@/enums'

import {
  BusinessWrapperInner,
  BusinessContainer,
  BusinessTitle,
  BusinessText,
  ColorTitle,
  BusinessWrapper,
} from './styled'

export const Business: FC = () => {
  const navigate: NavigateFunction = useNavigate()

  const handleNavigate = (): void => {
    navigate(Routes.Solutions)
  }

  return (
    <BusinessContainer>
      <BusinessWrapper>
        <BusinessTitle>
          The <ColorTitle>newest</ColorTitle> business
          analytics platform
        </BusinessTitle>
        <BusinessWrapperInner>
          <BusinessText>
            Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </BusinessText>
          <Button
            size="big"
            btnType="square"
            clickHandle={handleNavigate}>
            Discover more
          </Button>
        </BusinessWrapperInner>
      </BusinessWrapper>
    </BusinessContainer>
  )
}
