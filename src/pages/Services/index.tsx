import { FC } from 'react'

import { MainLayout } from 'layouts/MainLayout'
import {
  Help,
  ServicesInfo,
  SuccessStatistic,
} from 'components'

export const Services: FC = () => {
  return (
    <>
      <MainLayout>
        <ServicesInfo />
        <SuccessStatistic />
        <Help />
      </MainLayout>
    </>
  )
}
