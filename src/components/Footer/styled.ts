import styled from 'styled-components'

export const FooterContainer = styled.footer`
  padding-top: 50px;
  background-color: ${({ theme }) =>
    theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    padding-top: 40px;
  }
`

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1110px;
  margin: 0 auto;

  &:first-child {
    padding-bottom: 38px;
    border-bottom: 1px solid
      ${({ theme }) => theme.colors.helperBlue2};
  }

  &:last-child {
    padding: 34px 0 30px 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 16px;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding-bottom: 11x;
  }
`

export const LogoStyled = styled.img`
  width: 141px;
  height: 46px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 90px;
    height: 30px;
  }
`

export const HeadingText = styled.p`
  margin-bottom: 31px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    padding-bottom: 15px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid
      ${({ theme }) => theme.colors.helperBlue2};
  }
`

export const FooterText = styled.p`
  margin: 20px 0;
  max-width: 285px;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.grey};

  @media (max-width: 768px) {
    display: none;
  }
`

export const LinkWrapper = styled.li`
  list-style: none;
  margin: 12px 0;
  max-width: 235px;
  color: ${({ theme }) => theme.colors.grey};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.grey};
  }
`

export const RightsContainer = styled.div`
  display: content;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  gap: 95px;
`

export const Text =
  styled.p <
  any >
  `
  color: ${({ theme }) => theme.colors.helperBlue2};

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 150%;
    color: ${({ theme, color }) =>
      color ? theme.colors.white : null};
  }
`

export const WrapperText = styled.div``
export const FooterList = styled.ul``
export const Icon = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`
