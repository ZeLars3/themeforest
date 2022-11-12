import styled from 'styled-components'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

export const HeaderContainer = styled.header`
  padding: 40px 16px;
  background-color: ${({ theme }) =>
    theme.colors.background};

  @media (max-width: 768px) {
    padding: 20px 16px 0 16px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`

export const HeaderWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  max-width: 1110px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 360px) {
    background-color: ${({ theme }) => theme.colors.white};
  }
`

export const HeaderWrapperInner = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
  }

  img {
    @media (max-width: 360px) {
      width: 92px;
      height: 30px;
    }
  }
`

export const HeaderWrapperButton = styled(Box)`
  button {
    padding: 10px 13px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.01em;

    img {
      padding-right: 10px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const BurgerButton = styled(IconButton)`
  display: none !important;
  border: none;
  background-color: transparent;

  @media (max-width: 768px) {
    display: block !important;
  }
`

export const Icon = styled.img``
