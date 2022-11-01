import { FC } from 'react'
import { ReactComponent } from '*.svg'

type SvgrIcon = {
  icon: typeof ReactComponent,
  handleClick?: () => void,
}

export const Svgr: FC<SvgrIcon> = ({
  icon,
  handleClick,
}) => {
  const Icon = icon
  return <Icon onClick={handleClick} />
}