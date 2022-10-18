import { FC } from 'react'

import { Header } from 'components/common'
import { IMainLayout } from 'types'

import { Layout, Container } from './styled'

export const MainLayout: FC<{
  children: IMainLayout
}> = ({ children }) => (
  <Layout>
    <Container>
      <Header />
      <>{children}</>
    </Container>
  </Layout>
)
