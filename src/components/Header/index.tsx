import { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import LogoBlue from '@/assets/icons/logo_blue.png'
import MenuOpen from '@/assets/icons/menu.svg'
import MenuClose from '@/assets/icons/menuClose.svg'
import PlayIcon from '@/assets/icons/play.png'
import { RootState } from '@/store'

import {
  HeaderContainer,
  HeaderLogo,
  HeaderWrapper,
  HeaderWrapperButton,
  HeaderWrapperInner,
  Icon,
  BurgerButton,
} from './styled'
import {
  Navigation,
  Svgr,
  DemoVideo,
  Button,
} from '../common'

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] =
    useState<boolean>(false)
  const [isVideo, setIsVideo] = useState<boolean>(false)

  const currentViewport = useSelector<RootState, string>(
    ({ app }) => app.viewport
  )

  useEffect(() => {
    return currentViewport === 'desktop'
      ? setIsMenuOpen(true)
      : setIsMenuOpen(false)
  }, [currentViewport])

  const handleMenuClick = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleCallDemo = (): void => {
    setIsVideo(!isVideo)
  }

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderWrapperInner>
          <HeaderLogo>
            <Icon src={LogoBlue} alt="Site logo" />
          </HeaderLogo>
          <BurgerButton onClick={handleMenuClick}>
            {!isMenuOpen ? (
              <Svgr icon={MenuOpen} />
            ) : (
              <Svgr icon={MenuClose} />
            )}
          </BurgerButton>
        </HeaderWrapperInner>
        <Navigation menu={isMenuOpen} />
        <HeaderWrapperButton>
          <Button
            size="medium"
            btnType="square"
            clickHandle={handleCallDemo}>
            <Icon src={PlayIcon} alt="Play Demo" />
            Watch the demo
          </Button>
        </HeaderWrapperButton>
      </HeaderWrapper>
      {isVideo && <DemoVideo />}
    </HeaderContainer>
  )
}
