import styled from 'styled-components'

import { ButtonSize, ButtonType, PositionType } from './types'

interface IButtonContainer {
  btnType: ButtonType
  size: ButtonSize
  inversion?: boolean
  isDisable?: boolean
  contentPosition?: PositionType
}

export const ButtonContainer = styled.button<IButtonContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 125px;
  height: auto;
  border-radius: 6px;
  transition: 0.5s;
  cursor: pointer;
  box-shadow: ${({ isDisable }) => (isDisable ? 'none' : '0px 1.2rem 3rem rgba(24, 92, 255, 0.18)')};
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey};
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
`
