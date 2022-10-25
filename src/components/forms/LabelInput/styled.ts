import styled from 'styled-components'

export const LabelInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin: 0;
`

export const LabelInputField = styled.input<any>`
  width: 100%;
  padding: 5.5px 0;
  background: transparent;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${({ error, theme }) =>
    error ? theme.colors.red : theme.colors.grey};

  &::-webkit-input-placeholder {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.015em;
    color: ${({ error, theme }) =>
     error ? theme.colors.red : theme.colors.black};
  }

  &:active,
  &:focus {
    border-bottom: 1px solid ${({ theme }) =>
      theme.colors.primary}
  }
`

export const FieldLabel = styled.label`
  padding-top: 20px;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({theme}) => theme.colors.grey}
`

export const FieldMessage = styled.span`
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 0;
  color: ${({theme}) => theme.colors.red}
`
