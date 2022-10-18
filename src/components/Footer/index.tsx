import { FC, MouseEventHandler } from 'react'
import {
  Link,
  NavigateFunction,
  useNavigate
} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import LogoIcon from 'assets/icons/logo_white.png'
import { Routes } from 'enums'
import {
  SOCIAL_MEDIA_ICONS,
  FOOTER_LINKS,
  FOOTER_SERVICES
} from 'constants/index'

import {
  FooterContainer,
  FooterBlock,
  InfoContainer,
  LogoStyled,
  IconContainer,
  SocialIcon,
  LinksContainerStyled,
  ContactsContainerStyled,
  HeadingText,
  FooterText,
  RightsContainer,
  RightsText,
  PrivacyText,
  LinkWrapper,
  Wrapper
} from './styled'

export const Footer: FC = () => {
  const navigate: NavigateFunction = useNavigate()
  const handleNavigateFromLogo: MouseEventHandler<
  HTMLImageElement
  > = () => {
    navigate(Routes.Home)
  }

  return (
    <FooterBlock>
      <FooterContainer>
        <InfoContainer>
          <LogoStyled
            alt="Logo"
            src={LogoIcon}
            onClick={handleNavigateFromLogo}
          />
          <FooterText>
            Ut enim ad minima veniam, quis nostrum
            exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi.
          </FooterText>
          <IconContainer>
            {SOCIAL_MEDIA_ICONS.map(path => (
              <SocialIcon
                alt={`${path}icon`}
                src={path}
                key={uuidv4()}
              />
            ))}
          </IconContainer>
        </InfoContainer>
        <LinksContainerStyled>
          <HeadingText>Quick Link</HeadingText>
          {FOOTER_LINKS.map(({ route, name }) => (
            <LinkWrapper key={uuidv4()}>
              <Link to={route}>{name}</Link>
            </LinkWrapper>
          ))}
        </LinksContainerStyled>
        <LinksContainerStyled>
          <HeadingText>Services</HeadingText>
          {FOOTER_SERVICES.map(({ route, name }) => (
            <LinkWrapper key={uuidv4()}>
              <Link to={route}>{name}</Link>
            </LinkWrapper>
          ))}
        </LinksContainerStyled>
        <ContactsContainerStyled>
          <HeadingText>Contact Info</HeadingText>
          <LinkWrapper>ensome@info.co.us</LinkWrapper>
          <LinkWrapper>+1 601-201-5580</LinkWrapper>
          <LinkWrapper>
            1642 Washington Avenue, Jackson, MS,
            Mississippi, 39201
          </LinkWrapper>
        </ContactsContainerStyled>
      </FooterContainer>

      <FooterContainer>
        <RightsContainer>
          <RightsText>
            Ensome© 2022 All Rights Reserved
          </RightsText>
          <Wrapper>
            <PrivacyText>Privacy policy</PrivacyText>
            <PrivacyText>Terms of us</PrivacyText>
          </Wrapper>
        </RightsContainer>
      </FooterContainer>
    </FooterBlock>
  )
}
