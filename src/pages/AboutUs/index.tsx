import { FC } from 'react'

import { MainLayout } from 'layouts/MainLayout'
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
      <MainLayout>
        <AboutUsHead />
        <AboutUsInfo />
        <AboutUsStatistic />
        <AboutUsCustomers />
        <AboutUsSay />
        <AboutUsContact />
        <Subscribe background="primary" />
      </MainLayout>
    </>
  )
}
