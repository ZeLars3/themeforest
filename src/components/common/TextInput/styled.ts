import styled from 'styled-components'

export const TextInputContainer = styled.div`
  margin: 0;
  padding: 0;
`

export const TextInputField = styled.input<any>`
  background-color: ${({ theme }) => theme.colors.white};
  outline: none;

  &:active,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.white};
  }
`

export const FieldMessage = styled.span`
  position: absolute;
  z-index: 1;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.red};
`

export const TextInputMessage = styled.span`
  position: absolute;
  z-index: 1;
  margin-top: 60px;
  color: ${({ theme }) => theme.colors.red};
`
