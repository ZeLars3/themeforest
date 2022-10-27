import { FC } from 'react'

import {
  AboutUsContact,
  AboutUsCustomers,
  AboutUsHead,
  AboutUsInfo,
  AboutUsSay,
  AboutUsStatistic,
  Subscribe,
} from 'components'

export const AboutUs: FC = () => {
  return (
    <>
      <AboutUsHead />
      <AboutUsInfo />
      <AboutUsStatistic />
      <AboutUsCustomers />
      <AboutUsSay />
      <AboutUsContact />
      <Subscribe background="primary" />
    </>
  )
}
