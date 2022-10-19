import { FC } from 'react'

import { MainLayout } from 'layouts/MainLayout'
import { Help } from 'components/Help'
import { Business } from 'components/Business'
import { SuccessStatistic } from 'components/SuccessStatistic'

export const Home: FC = () => {
  return (
    <>
      <MainLayout>
        <SuccessStatistic />
        <Business />
        <Help />
      </MainLayout>
    </>
  )
}
