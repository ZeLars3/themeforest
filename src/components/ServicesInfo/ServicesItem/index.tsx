import { FC } from 'react'
import {
  useLocation,
  Location,
  useNavigate,
  NavigateFunction,
} from 'react-router-dom'

import { IServicesItem } from '@/types'
import ArrowRightSmall from '@/assets/icons/arrowRightSmall.png'
import { Svgr } from '@/components/common'

import {
  Icon,
  ServiceItemContainer,
  ServiceItemText,
  ServiceItemTitle,
  ReadButton,
} from './styled'

export const ServicesItem: FC<IServicesItem> = ({
  id,
  title,
  text,
  icon,
}) => {
  const navigate: NavigateFunction = useNavigate()
  const location: Location = useLocation()

  const handleNavigate = (): void => {
    navigate(location.pathname + `/id=${id}`)
  }

  return (
    <ServiceItemContainer>
      <Svgr icon={icon} />
      <ServiceItemTitle variant="h4">
        {title}
      </ServiceItemTitle>
      <ServiceItemText variant="body1">
        {text}
      </ServiceItemText>
      <ReadButton onClick={handleNavigate}>
        Read more{' '}
        <Icon src={ArrowRightSmall} alt="read more" />
      </ReadButton>
    </ServiceItemContainer>
  )
}
