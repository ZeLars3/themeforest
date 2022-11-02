import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Routes } from '@/enums'

import {
  NotFoundContainer,
  NotFoundSubtitle,
  NotFoundTitle,
  NotFoundWrapper,
} from './styled'

const NotFound: FC = () => {
  return (
    <NotFoundContainer>
      <NotFoundWrapper>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundSubtitle>
          This page does not exist
        </NotFoundSubtitle>
        <Link to={Routes.Home}>Go to Home </Link>
      </NotFoundWrapper>
    </NotFoundContainer>
  )
}

export default NotFound
