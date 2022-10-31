import { FC, Suspense } from 'react'

import { Header } from 'components/common'
import { Subscribe, Footer } from 'components'
import ContentRoutes from 'Routes'

export const MainLayout: FC = () => (
  <>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <ContentRoutes />
    </Suspense>
    <Subscribe background="secondary" />
    <Footer />
  </>
)
