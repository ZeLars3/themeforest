import styled from 'styled-components'

export const DropdownSelect = styled.select`
  border: none;
  background: none;
  cursor: pointer;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.grey};
`

export const DropdownOption = styled.option``
