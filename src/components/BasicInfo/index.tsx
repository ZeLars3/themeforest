import { FC } from 'react'
import {
  NavigateFunction,
  useNavigate,
} from 'react-router-dom'

import { Routes } from '@/enums'
import InfoBig from '@/assets/img/infoBig.jpg'
import InfoSmall from '@/assets/img/infoSmall.jpg'
import { useTypedSelector } from '@/hooks'

import {
  Img,
  ColorTitle,
  BasicInfoButton,
  BasicInfoWrapper,
  BasicInfoImgWrapper,
  BasicInfoText,
  BasicInfoTitle,
  BasicInfoWrapperText,
  BasicInfoContainer,
} from './styled'
export const BasicInfo: FC = () => {
  const navigate: NavigateFunction = useNavigate()

  const currentViewport: string = useTypedSelector(
    ({ app }) => app.viewport,
  )

  const handleNavigate = (): void => {
    navigate(Routes.Services)
  }

  return (
    <BasicInfoContainer>
      <BasicInfoWrapper>
        <BasicInfoTitle variant="h1">
          Find true power in your data with{' '}
          <ColorTitle
            variant="h1"
            component="span"
            color="primary">
            Ensome
          </ColorTitle>
        </BasicInfoTitle>
        <BasicInfoWrapperText elevation={0}>
          <BasicInfoText>
            Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </BasicInfoText>
          <BasicInfoButton onClick={handleNavigate}>
            Learn more
          </BasicInfoButton>
        </BasicInfoWrapperText>
      </BasicInfoWrapper>
      <BasicInfoImgWrapper>
        <Img
          src={
            currentViewport === 'desktop'
              ? InfoBig
              : InfoSmall
          }
          alt="info"
        />
      </BasicInfoImgWrapper>
    </BasicInfoContainer>
  )
}
