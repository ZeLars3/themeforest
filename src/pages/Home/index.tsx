import { FC } from 'react'

import { MainLayout } from 'layouts/MainLayout'
import { Help } from 'components/Help'
import { Business } from 'components/Business'
import { SuccessStatistic } from 'components/SuccessStatistic'
import { NewSolutions } from 'components/NewSolutions'

export const Home: FC = () => {
  return (
    <>
      <MainLayout>
        <Business />
        <NewSolutions />
        <SuccessStatistic />
        <Help />
      </MainLayout>
    </>
  )
}
