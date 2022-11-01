import { FC } from 'react'

import {
  Help,
  ServicesInfo,
  SuccessStatistic,
} from '@/components'

const Services: FC = () => {
  return (
    <>
      <ServicesInfo />
      <SuccessStatistic />
      <Help />
    </>
  )
}

export default Services
