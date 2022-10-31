import { FC } from 'react'

import {
  Help,
  Business,
  SuccessStatistic,
  NewSolutions,
  Benefits,
  BasicInfo,
  Testimonials,
  Blog,
  Pricing,
} from 'components'

const Home: FC = () => {
  return (
    <>
      <BasicInfo />
      <Business />
      <NewSolutions />
      <SuccessStatistic />
      <Benefits />
      <Testimonials />
      <Pricing />
      <Blog />
      <Help />
    </>
  )
}

export default Home