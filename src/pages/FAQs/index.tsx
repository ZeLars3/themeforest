import { FC } from 'react'

import { MainLayout } from 'layouts/MainLayout'
import { Help, FAQsHead, FAQsList } from 'components'

export const FAQs: FC = () => {
  return (
    <>
      <MainLayout>
        <FAQsHead />
        <FAQsList />
        <Help />
      </MainLayout>
    </>
  )
}
