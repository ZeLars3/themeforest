import { FC } from 'react'

import { MainLayout } from 'layouts/MainLayout'
import { OurTeamList, OutTeamHead } from 'components'

export const OurTeam: FC = () => {
  return (
    <>
      <MainLayout>
        <OutTeamHead />
        <OurTeamList />
      </MainLayout>
    </>
  )
}
