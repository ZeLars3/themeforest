import { FC } from 'react'

import { MainLayout } from 'layouts/MainLayout'
import {
  Help,
  Business,
  SuccessStatistic,
  NewSolutions,
  Benefits,
  BasicInfo,
  Testimonials,
  Blog,
  Pricing
} from 'components'

export const Home: FC = () => {
  return (
    <>
      <MainLayout>
        <BasicInfo />
        <Business />
        <NewSolutions />
        <SuccessStatistic />
        <Benefits />
        <Testimonials />
        <Pricing />
        <Blog />
        <Help />
      </MainLayout>
    </>
  )
}
