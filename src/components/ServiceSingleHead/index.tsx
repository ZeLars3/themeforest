import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { Routes } from '@/enums'
import { SERVICES_ITEMS } from '@/constants/index'
import { useTypedSelector } from '@/hooks'

import {
  ServiceSingleHeadContainer,
  ServiceSingleHeadLink,
  ServiceSingleHeaddPath,
  SolutionsHeadSubtitle,
  ServiceSingleTitle,
  ServiceSingleHeadWrapper,
} from './styled'

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
        <ServiceSingleHeaddPath>
          <ServiceSingleHeadLink href={Routes.Home}>
            Home
          </ServiceSingleHeadLink>{' '}
          | {title}
        </ServiceSingleHeaddPath>
        <ServiceSingleTitle>{title}</ServiceSingleTitle>
        <SolutionsHeadSubtitle>
          {currentViewport === 'desktop' ? `${text}` : null}
        </SolutionsHeadSubtitle>
      </ServiceSingleHeadWrapper>
    </ServiceSingleHeadContainer>
  )
}
