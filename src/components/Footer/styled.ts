import styled from 'styled-components'

export const FooterBlock = styled.footer`
  flex-direction: column;
  background-color: ${({ theme }) =>
    theme.colors.secondary};
`

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1110px;
  margin: 0 auto;
  padding-top: 50px;

  &:first-child {
    padding-bottom: 38px;
    border-bottom: 1px solid
      ${({ theme }) => theme.colors.helperBlue2};
  }

  &:last-child {
    padding: 34px 0 30px 0;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    display: flex;
  }
`

export const LogoStyled = styled.img`
  width: 141px;
  height: 46px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
`

export const IconContainer = styled.div`
  column-gap: 16px;
`

export const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`

export const LinksContainerStyled = styled.div`
  flex-direction: column;
`

export const ContactsContainerStyled = styled.div`
  flex-direction: column;
`

export const HeadingText = styled.p`
  margin-bottom: 31px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};
`

export const FooterText = styled.p`
  margin: 20px 0;
  max-width: 285px;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.grey};

  & > * {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.grey};
  }
`

export const LinkWrapper = styled(FooterText)`
  margin: 12px 0;
  max-width: 235px;
`

export const RightsContainer = styled.div`
  display: contents;
  align-items: center;
  justify-content: space-between;
`

export const Wrapper = styled.div`
  display: flex;
  gap: 95px;
`

export const RightsText = styled.p`
  color: ${({ theme }) => theme.colors.helperBlue2};
`

export const PrivacyText = styled.p`
  color: ${({ theme }) => theme.colors.helperBlue2};
`
