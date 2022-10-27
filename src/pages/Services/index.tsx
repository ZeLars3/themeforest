import { FC } from 'react'

import {
  Help,
  ServicesInfo,
  SuccessStatistic,
} from 'components'

export const Services: FC = () => {
  return (
    <>
      <ServicesInfo />
      <SuccessStatistic />
      <Help />
    </>
  )
}
