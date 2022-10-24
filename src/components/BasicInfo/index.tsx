import { FC } from 'react'
import {
  NavigateFunction,
  useNavigate
} from 'react-router-dom'
import { useSelector } from 'react-redux'

import InfoBig from 'assets/img/infoBig.jpg'
import InfoSmall from 'assets/img/infoSmall.jpg'
import { Routes } from 'enums'

import {
  Img,
  ColorTitle,
  BasicInfoButton,
  BasicInfoWrapper,
  BasicInfoImgWrapper,
  BasicInfoText,
  BasicInfoTitle,
  BasicInfoWrapperText,
  BasicInfoContainer
} from './styled'
import { RootState } from 'store'

export const BasicInfo: FC = () => {
  const navigate: NavigateFunction = useNavigate()

  const currentViewport = useSelector<RootState, string>(
    ({ app }) => app.viewport
  )

  const handleNavigate = (): void => {
    navigate(Routes.Services)
  }

  return (
    <BasicInfoContainer>
      <BasicInfoWrapper>
        <BasicInfoTitle>
          Find true power in your data with <ColorTitle>Ensome</ColorTitle>
        </BasicInfoTitle>
        <BasicInfoWrapperText>
          <BasicInfoText>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </BasicInfoText>
          <BasicInfoButton onClick={handleNavigate}>
            Learn more
          </BasicInfoButton>
        </BasicInfoWrapperText>
      </BasicInfoWrapper>
      <BasicInfoImgWrapper>
        <Img src={currentViewport === 'desktop' ? InfoBig : InfoSmall} />
      </BasicInfoImgWrapper>
    </BasicInfoContainer>
  )
}
