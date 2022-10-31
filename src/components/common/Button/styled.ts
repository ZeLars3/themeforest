import styled from 'styled-components'

import { IButtonContainer } from './types'

export const ButtonContainer = styled.button <IButtonContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 125px;
  height: auto;
  border-radius: 6px;
  transition: 0.7s;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ isDisable }) =>
    isDisable
      ? 'none'
      : '0px 12px 30px rgba(24, 92, 255, 0.18)'};
  
  &:disabled {
    background: ${({ theme }) => theme.colors.grey};
    border: 1px solid ${({ theme }) => theme.colors.black};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }
`
