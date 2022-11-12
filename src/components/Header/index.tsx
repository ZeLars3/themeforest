import { FC, useEffect, useState } from 'react'

import LogoBlue from '@/assets/icons/logo_blue.png'
import MenuOpen from '@/assets/icons/menu.svg'
import MenuClose from '@/assets/icons/menuClose.svg'
import PlayIcon from '@/assets/icons/play.png'
import { useTypedSelector } from '@/hooks'

import {
  BurgerButton,
  HeaderContainer,
  HeaderWrapper,
  HeaderWrapperButton,
  HeaderWrapperInner,
  Icon,
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

  const currentViewport: string = useTypedSelector(
    ({ app }) => app.viewport,
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
          <Icon src={LogoBlue} alt="Site logo" />
          <BurgerButton
            onClick={handleMenuClick}
            aria-label="open/close menu">
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
            variant="contained"
            clickHandle={handleCallDemo}>
            <Icon src={PlayIcon} alt="Play Demo" />
            Watch the demo
          </Button>
        </HeaderWrapperButton>
      </HeaderWrapper>
      <DemoVideo
        isOpen={isVideo}
        onClose={handleCallDemo}
      />
    </HeaderContainer>
  )
}
