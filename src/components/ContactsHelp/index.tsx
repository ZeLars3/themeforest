import { FC } from 'react'

import { ContactHelpForm } from '@/components/forms/ContactHelpForm'
import { Routes } from '@/enums'

import { ContactsHelpItem } from './ContactsHelpItem'
import {
  ContactsHelpContainer,
  ContactsHelpWrapper,
  Wrapper,
  ContactsHelpTitle,
  ContactsHelpFormWrapper,
  ContactsHelpList,
  ColorTitle,
} from './styled'
import { Breadcrumbs } from '../common'

export const ContactsHelp: FC = () => {
  return (
    <ContactsHelpContainer>
      <ContactsHelpWrapper>
        <Breadcrumbs
          path={Routes.Home}
          currentPage={'Contacts'}
          color={'black'}
        />
        <Wrapper>
          <ContactsHelpTitle>
            How can we <ColorTitle>help you?</ColorTitle>
          </ContactsHelpTitle>
          <ContactsHelpFormWrapper>
            <ContactHelpForm />
          </ContactsHelpFormWrapper>
          <ContactsHelpList>
            <ContactsHelpItem />
          </ContactsHelpList>
        </Wrapper>
      </ContactsHelpWrapper>
    </ContactsHelpContainer>
  )
}
