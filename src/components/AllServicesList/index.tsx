import { FC } from 'react'
import {
  NavigateFunction,
  useNavigate,
} from 'react-router-dom'

import { SERVICES_ITEMS } from '@/constants/index'
import ArrowRight from '@/assets/icons/arrowRight.png'
import { Routes } from '@/enums'

import {
  AllServicesItem,
  AllServicesListWrapper,
  AllServicesWrapper,
  Title,
  Icon,
} from './styled'

export const AllServicesList: FC = () => {
  const navigate: NavigateFunction = useNavigate()

  const serviceItemClickHandle =
    (id: string) => (): void => {
      navigate(`${Routes.Services}/id=${id}`)
    }

  return (
    <AllServicesWrapper>
      <Title>All services</Title>
      <AllServicesListWrapper>
        {SERVICES_ITEMS.map(({ title, id }) => {
          return (
            <AllServicesItem
              key={id}
              onClick={serviceItemClickHandle(String(id))}>
              {title} <Icon src={ArrowRight} />
            </AllServicesItem>
          )
        })}
      </AllServicesListWrapper>
    </AllServicesWrapper>
  )
}
