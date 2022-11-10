import { FC } from 'react'

import { ButtonContainer } from './styled'
import { ButtonPropsType } from './types'

export const Button: FC<ButtonPropsType> = ({
  clickHandle,
  children,
}) => {
  return (
    <ButtonContainer
      variant="contained"
      onClick={clickHandle}>
      {children}
    </ButtonContainer>
  )
}
