import { FC } from 'react'

import { MainLayout } from 'layouts/MainLayout'
import { Help } from 'components/Help'
import { Business } from 'components/Business'

export const Home: FC = () => {
  return (
    <>
      <MainLayout>
        <Business />
        <Help />
      </MainLayout>
    </>
  )
}
