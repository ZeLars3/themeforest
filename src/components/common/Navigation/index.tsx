import { FC } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'store'
import { NAV_ITEMS } from 'constants/navItems'
import { INavigation } from 'types'

import {
  NavigationContainer,
  NavigationList,
  NavigationListItem
} from './styles'
import { SocialLinks } from '../SocialLinks'

export const Navigation: FC<INavigation> = ({ menu }) => {
  const currentViewport: string = useSelector<RootState, string>(
    ({ app }) => app.viewport
  )

  return (
    <NavigationContainer>
      {menu && (
        <NavigationList>
          {NAV_ITEMS.map(({ id, name, path }) => {
            return (
              <NavigationListItem to={path} key={id}>
                {name}
              </NavigationListItem>
            )
          })}
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
