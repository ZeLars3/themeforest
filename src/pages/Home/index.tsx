import { FC } from 'react'

import { MainLayout } from 'layouts/MainLayout'
import { Help } from 'components/Help'
import { Business } from 'components/Business'
import { SuccessStatistic } from 'components/SuccessStatistic'
import { NewSolutions } from 'components/NewSolutions'
import { Benefits } from 'components/Benefits'
import { BasicInfo } from 'components/BasicInfo'

export const Home: FC = () => {
  return (
    <>
      <MainLayout>
        <BasicInfo />
        <Business />
        <NewSolutions />
        <SuccessStatistic />
        <Benefits />
        <Help />
      </MainLayout>
    </>
  )
}
