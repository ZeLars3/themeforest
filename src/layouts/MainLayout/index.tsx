import { FC } from 'react'

import { Header } from 'components/common'
import { Footer } from 'components/Footer'
import { IMainLayout } from 'types'

import { Layout, Container } from './styled'
import { Subscribe } from 'components/Subscribe'

export const MainLayout: FC<{
  children: IMainLayout
}> = ({ children }) => (
  <Layout>
    <Container>
      <Header />
      <>{children}</>
      <Subscribe />
      <Footer />
    </Container>
  </Layout>
)
