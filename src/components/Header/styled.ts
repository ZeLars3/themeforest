import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) =>
    theme.colors.background};
  padding: 40px 0;

  @media (max-width: 768px) {
    background-color: ${({ theme }) => theme.colors.white};
    padding: 20px 0 0 0;
  }
`

export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 1110px;
  min-width: 360px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 16px;
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 360px) {
    background-color: ${({ theme }) => theme.colors.white};
  }
`

export const HeaderWrapperInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`

export const HeaderWrapperButton = styled.div`
  button {
    width: 168px;
    padding: 10px 13px;
    border: none;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.white};

    img {
      padding-right: 10px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const HeaderLogo = styled.div`
  img {
    @media (max-width: 360px) {
      width: 92px;
      height: 30px;
    }
  }
`

export const BurgerButton = styled.button`
  display: none;
  border: none;
  background-color: transparent;

  @media (max-width: 768px) {
    display: block;
  }
`

export const Icon = styled.img``
