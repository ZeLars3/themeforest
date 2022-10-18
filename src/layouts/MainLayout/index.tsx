import { FC } from 'react'

import { Header } from 'components/common'
import { Footer } from 'components/Footer'
import { IMainLayout } from 'types'

import { Layout, Container } from './styled'

export const MainLayout: FC<{
  children: IMainLayout
}> = ({ children }) => (
  <Layout>
    <Container>
      <Header />
      <>{children}</>
      <Footer />
    </Container>
  </Layout>
)
