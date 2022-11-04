import { FC } from 'react'

import {
  Help,
  Business,
  SuccessStatistic,
  NewSolutions,
  Benefits,
  BasicInfo,
  Testimonials,
  OurBlog,
  Pricing,
} from '@/components'

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
      <OurBlog />
      <Help />
    </>
  )
}

export default Home
