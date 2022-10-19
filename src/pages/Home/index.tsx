import { FC } from 'react'

import { MainLayout } from 'layouts/MainLayout'
import { Help } from 'components/Help'

export const Home: FC = () => {
  return (
    <>
      <MainLayout>
        <Help />
      </MainLayout>
    </>
  )
}
