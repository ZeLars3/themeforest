import { FC } from 'react'

import { NAV_ITEMS } from '@/constants/navItems'
import { INavigation } from '@/types'
import { useTypedSelector } from '@/hooks'

import { SocialLinks } from '../SocialLinks'
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
          {NAV_ITEMS.map(({ id, name, path }) => (
            <NavigationListItem to={path} key={id}>
              {name}
            </NavigationListItem>
          ))}
        </NavigationList>
      )}
      {currentViewport === 'desktop'
        ? null
        : menu && <SocialLinks />}
    </NavigationContainer>
  )
}
