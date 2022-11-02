import { FC } from 'react'

import { NAV_ITEMS } from '@/constants/navItems'
import { INavigation } from '@/types'
import { useTypedSelector } from '@/hooks'

import { SocialLinks } from '../SocialLinks'
import { Dropdown } from '../Dropdown'
import {
  NavigationContainer,
  NavigationList,
  NavigationListItem,
} from './styles'

export const Navigation: FC<INavigation> = ({ menu }) => {
  const currentViewport: string = useTypedSelector(
    ({ app }) => app.viewport,
  )
  return (
    <NavigationContainer>
      {menu && (
        <NavigationList>
          {NAV_ITEMS.slice(0, 2).map(({ id, name, path }) => (
            <NavigationListItem to={path} key={id}>
              {name}
            </NavigationListItem>
          ))}
          <Dropdown />
          {NAV_ITEMS.slice(2).map(({ id, name, path }) => (
            <NavigationListItem to={path} key={id}>
              {name}
            </NavigationListItem>
          ))}
        </NavigationList>
      )}
      {currentViewport === 'tablet' && menu && (
        <SocialLinks />
      )}
      {currentViewport === 'mobile' && menu && (
        <SocialLinks />
      )}
    </NavigationContainer>
  )
}
