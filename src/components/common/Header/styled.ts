import styled from 'styled-components'

export const HeaderStyled = styled.header`
  margin: 0 auto;
  max-width: 1100px;
  max-height: 126px;
  padding: 40px 0px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  background-color: ${({ theme }) =>
    theme.colors.background};

  & > * {
    cursor: pointer;
  }
`

export const LogoStyled = styled.img`
  width: 141px;
  height: 46px;
  display: flex;
  justify-self: center;
  align-self: center;
`

export const LinksContainer = styled.div`
  column-gap: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LinkStyled = styled.div`
  font-size: 14px;
  line-height: 24px;

  & > * {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.grey};
  }
`
