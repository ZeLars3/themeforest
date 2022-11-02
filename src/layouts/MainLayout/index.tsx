import { FC, Suspense } from 'react'

import { Header, Loader } from '@/components/common'
import { Subscribe, Footer } from '@/components'
import ContentRoutes from '@/Routes'

export const MainLayout: FC = () => (
  <>
    <Header />
    <Suspense fallback={<Loader />}>
      <ContentRoutes />
    </Suspense>
    <Subscribe background="secondary" />
    <Footer />
  </>
)
