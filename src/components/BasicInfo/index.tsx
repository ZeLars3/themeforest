import { FC } from 'react'
import {
  NavigateFunction,
  useNavigate,
} from 'react-router-dom'

import Info from 'assets/img/info.jpg'
import { Routes } from 'enums'

import {
  InformationButton,
  BasicInfoContainer,
  InformationImage,
  BasicInfoText,
  BasicInfoTitle,
  BasicInfoWrapperText,
  BasicInfoWrapper,
  Img,
  ColorTitle,
} from './styled'

export const BasicInfo: FC = () => {
  const navigate: NavigateFunction = useNavigate()

  const handleNavigate = (): void => {
    navigate(Routes.Services)
  }

  return (
    <BasicInfoContainer>
      <BasicInfoWrapper>
        <BasicInfoWrapperText>
          <BasicInfoTitle>
            Find true power in your data with{' '}
            <ColorTitle>Ensome</ColorTitle>
          </BasicInfoTitle>
          <BasicInfoText>
            Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque lauda,
            totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi.
          </BasicInfoText>
        </BasicInfoWrapperText>
        <InformationButton onClick={handleNavigate}>
          Learn more
        </InformationButton>
      </BasicInfoWrapper>
      <InformationImage>
        <Img src={Info} />
      </InformationImage>
    </BasicInfoContainer>
  )
}
