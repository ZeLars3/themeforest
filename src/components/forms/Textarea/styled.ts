import styled from 'styled-components'

export const TextareaField = styled.textarea<any>`
  position: relative;
  height: 140px;
  padding: 5px 10px;
  margin: 0;
  border-radius: 6px;
  resize: none;
  outline: none;
  background-color: ${({ bgColor, theme }) =>
    bgColor == 'white'
      ? theme.colors.white
      : theme.colors.helperBlue3};
  border: 1px solid ${({ border, theme }) =>
    border ? theme.colors.grey : 'transparent'};
  ${({ error, theme }) =>
    error && `border: 1px solid ${theme.colors.red}`};
    
  &:active,
  &:focus {
    border: 1px solid ${({ theme }) =>
      theme.colors.primary};
  }
`
