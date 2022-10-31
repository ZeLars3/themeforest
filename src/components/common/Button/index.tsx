import { FC } from 'react'

import { ButtonContainer } from './styled'
import { ButtonPropsType } from './types'

export const Button: FC<ButtonPropsType> = ({
  btnType,
  size,
  clickHandle,
  isDisable,
  inversion,
  children,
}) => {
  return (
    <ButtonContainer
      btnType={btnType}
      size={size}
      isDisable={isDisable}
      inversion={inversion}
      onClick={clickHandle}>
      {children}
    </ButtonContainer>
  )
}
