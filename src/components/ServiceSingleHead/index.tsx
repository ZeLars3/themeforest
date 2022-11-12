import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { Routes } from '@/enums'
import { SERVICES_ITEMS } from '@/constants/index'
import { useTypedSelector } from '@/hooks'

import {
  ServiceSingleHeadContainer,
  SolutionsHeadSubtitle,
  ServiceSingleTitle,
  ServiceSingleHeadWrapper,
} from './styled'
import { Breadcrumbs } from '../common'

export const ServiceSingleHead: FC = () => {
  const currentViewport: string = useTypedSelector(
    ({ app }) => app.viewport,
  )
  const { pathname } = useLocation()
  const service = SERVICES_ITEMS.filter(
    ({ id }) => id === pathname.split('=')[1],
  )[0]
  const { title, text } = service

  return (
    <ServiceSingleHeadContainer>
      <ServiceSingleHeadWrapper>
        <Breadcrumbs
          path={Routes.Home}
          currentPage={title}
          color={
            currentViewport === 'desktop'
              ? 'black'
              : 'white'
          }
        />
        <ServiceSingleTitle variant="h1">
          {title}
        </ServiceSingleTitle>
        <SolutionsHeadSubtitle variant="h5">
          {currentViewport === 'desktop' ? `${text}` : null}
        </SolutionsHeadSubtitle>
      </ServiceSingleHeadWrapper>
    </ServiceSingleHeadContainer>
  )
}
