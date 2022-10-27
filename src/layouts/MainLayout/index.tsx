import { FC } from 'react'

import { Header } from 'components/common'
import { Subscribe, Footer } from 'components'
import ContentRoutes from 'components/common/Routes'


export const MainLayout: FC = () => (
  <>
    <Header />
    <ContentRoutes />
    <Subscribe background="secondary" />
    <Footer />
  </>
)
