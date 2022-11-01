import {
  FC,
  MouseEventHandler,
  useState,
} from 'react'
import {
  Link,
  NavigateFunction,
  useNavigate,
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import LogoIcon from '@/assets/icons/logo_white.png'
import Arrow from '@/assets/icons/arrowDropdown.svg'
import { Routes } from '@/enums'
import {
  FOOTER_CONTACTS,
  FOOTER_LINKS,
  FOOTER_SERVICES,
} from '@/constants/index'
import { SocialLinks } from '@/components/common'
import { RootState } from '@/store'

import {
  FooterContainer,
  InfoContainer,
  LogoStyled,
  WrapperText,
  HeadingText,
  FooterText,
  RightsContainer,
  Text,
  LinkWrapper,
  FooterWrapper,
  Icon,
  FooterList,
} from './styled'

export const Footer: FC = () => {
  const navigate: NavigateFunction = useNavigate()
  const [isShowDropDowm, setIsShowDropDowm] = useState(true)

  const currentViewport: string = useSelector<RootState, string>(
    ({ app }) => app.viewport,
  )

  const handleNavigateFromLogo: MouseEventHandler<
    HTMLImageElement
  > = () => {
    navigate(Routes.Home)
  }

  const handleClick = (): void => {
    if (currentViewport !== 'desktop') {
      setIsShowDropDowm(!isShowDropDowm)
    }
  }

  return (
    <FooterContainer>
      <FooterWrapper>
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
          <SocialLinks />
        </InfoContainer>
        <WrapperText>
          <HeadingText onClick={handleClick}>
            Quick Link
            <Icon icon={Arrow} />
          </HeadingText>
          {isShowDropDowm && (
            <FooterList>
              {FOOTER_LINKS.map(({ route, name }) => (
                <LinkWrapper key={uuidv4()}>
                  <Link to={route}>{name}</Link>
                </LinkWrapper>
              ))}
            </FooterList>
          )}
        </WrapperText>
        <WrapperText>
          <HeadingText onClick={handleClick}>
            Services
            <Icon icon={Arrow} />
          </HeadingText>
          {isShowDropDowm && (
            <FooterList>
              {FOOTER_SERVICES.map(({ route, name }) => (
                <LinkWrapper key={uuidv4()}>
                  <Link to={route}>{name}</Link>
                </LinkWrapper>
              ))}
            </FooterList>
          )}
        </WrapperText>
        <WrapperText>
          <HeadingText onClick={handleClick}>
            Contact Info <Icon icon={Arrow} />
          </HeadingText>
          {isShowDropDowm && (
            <FooterList>
              {FOOTER_CONTACTS.map(({ route, name }) => (
                <LinkWrapper key={uuidv4()}>
                  <Link to={route}>{name}</Link>
                </LinkWrapper>
              ))}
            </FooterList>
          )}
        </WrapperText>
      </FooterWrapper>
      <RightsContainer>
        <Text>
          Ensome© 2022 All Rights Reserved
        </Text>
        <>
          <Text color>Privacy policy</Text>
          <Text color>Terms of us</Text>
        </>
      </RightsContainer>
    </FooterContainer>
  )
}
