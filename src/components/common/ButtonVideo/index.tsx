import { FC } from 'react'

import Play from 'assets/icons/play.png'
import { IButtonVideo } from 'types'

import {
  ButtonStyled,
  ImgStyled,
  TextStyled,
} from './styled'

export const ButtonVideo: FC<IButtonVideo> = ({ handleClick }) => (
  <ButtonStyled onClick={handleClick}>
    <ImgStyled alt="Play video" src={Play} />
    <TextStyled>Watch The Demo</TextStyled>
  </ButtonStyled>
)
