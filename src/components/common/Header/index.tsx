import { FC, MouseEventHandler } from 'react'
import {
  Link,
  NavigateFunction,
  useNavigate
} from 'react-router-dom'

import LogoImg from 'assets/icons/logo_blue.png'
import { Routes } from 'enums'

import { Dropdown } from '../Dropdown'
import { ButtonVideo } from '../ButtonVideo'
import {
  HeaderStyled,
  LogoStyled,
  LinksContainer,
  LinkStyled
} from './styled'

export const Header: FC = () => {
  const navigate: NavigateFunction = useNavigate()

  const handleNavigateFromLogo: MouseEventHandler<
  HTMLImageElement
  > = () => {
    navigate(Routes.Home)
  }

  return (
    <HeaderStyled>
      <LogoStyled
        alt="Logo"
        src={LogoImg}
        onClick={handleNavigateFromLogo}
      />
      <LinksContainer>
        <LinkStyled>
          <Link to={Routes.Home}>Home</Link>
        </LinkStyled>
        <LinkStyled>
          <Link to={Routes.Solutions}>Solutions</Link>
        </LinkStyled>
        <Dropdown />
        <LinkStyled>
          <Link to={Routes.Elements}>Elements</Link>
        </LinkStyled>
        <LinkStyled>
          <Link to={Routes.Blog}>Blog</Link>
        </LinkStyled>
        <LinkStyled>
          <Link to={Routes.Contacts}>Contacts</Link>
        </LinkStyled>
      </LinksContainer>
      <ButtonVideo />
    </HeaderStyled>
  )
}
