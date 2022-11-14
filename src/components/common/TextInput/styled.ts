import styled from 'styled-components'

export const TextInputContainer = styled.div`
  width: 100%;
`

export const TextInputField = styled.input<any>`
  position: relative;
  width: 100%;
  padding: 5px 10px;
  border-radius: 6px;
  outline: none;
  border: 1px solid ${({ border, theme }) =>
    border ? theme.colors.grey : 'transparent'};
  background-color: ${({ bgColor, theme }) =>
    bgColor !== 'white'
      ? theme.colors.white
      : theme.colors.helperBlue3};
      ${({ error, theme }) =>
        error && `border: 1px solid ${theme.colors.red}`};

  &:active,
  &:focus {
    border: 1px solid ${({ theme }) =>
      theme.colors.primary};
  }
`

export const FieldMessage = styled.span`
  position: absolute;
  z-index: 1;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.red};
`

export const TextInputMessage = styled.p`
  padding-top: 5px;
  color: ${({ theme }) => theme.colors.red};
`
