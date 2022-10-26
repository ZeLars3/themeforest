import { FC } from 'react'

import { Map } from 'components/common'
import { MainLayout } from 'layouts/MainLayout'
import { ContactsHelp } from 'components'

export const Contacts: FC = () => {
  return (
    <>
      <MainLayout>
        <ContactsHelp />
        <Map />
      </MainLayout>
    </>
  )
}
