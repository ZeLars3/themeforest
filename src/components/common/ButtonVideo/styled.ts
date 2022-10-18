import styled from 'styled-components'

export const ButtonStyled = styled.button`
  display: flex;
  align-self: center;
  justify-content: space-between;
  width: 168px;
  height: 44px;
  border-radius: 6px;
  border: none;
  padding: 10px 13px;
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }

  &:active {
    background-color: ${({ theme }) =>
      theme.colors.primary};
  }
`

export const TextStyled = styled.p`
  line-height: 24px;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.white};
`

export const ImgStyled = styled.img``
