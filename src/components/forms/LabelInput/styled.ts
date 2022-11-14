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
    color: ${({ error, theme }) =>
      error ? theme.colors.red : theme.colors.grey};
  }

  &:active,
  &:focus {
    border-bottom: 1px solid ${({ theme }) =>
      theme.colors.primary}
  }
`

export const FieldLabel = styled.label`
  padding-top: 20px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.black};
`

export const FieldMessage = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.red};
`
