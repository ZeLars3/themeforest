import styled from 'styled-components'

export const TextInputContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
`

export const TextInputField = styled.input<any>`
  position: relative;
  width: 100%;
  padding: 5px 10px;
  background-color: ${({ bgColor }) => bgColor === 'white' ? 'white' : 'grey'};
  border-radius: 6px;
  outline: none;

  &:active,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
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
  bottom: 13px;
  right: 20px;
  color: ${({ theme }) => theme.colors.red};
`
