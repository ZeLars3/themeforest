import { FC } from 'react'

import Play from 'assets/icons/play.png'

import {
  ButtonStyled,
  ImgStyled,
  TextStyled,
} from './styled'

export const ButtonVideo: FC = () => (
  <ButtonStyled>
    <ImgStyled alt="Play video" src={Play} />
    <TextStyled>Watch The Demo</TextStyled>
  </ButtonStyled>
)
