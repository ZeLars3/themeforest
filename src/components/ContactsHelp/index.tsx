import { FC } from 'react'

import { ContactHelpForm } from 'components/forms/ContactHelpForm'
import { Routes } from 'enums'

import { ContactsHelpItem } from './ContactsHelpItem'
import {
  ContactsHelpContainer,
  ContactsHelpWrapper,
  Wrapper,
  ContactsHelpTitle,
  ContactsHelpFormWrapper,
  ContactsHelpLink,
  ContactsHelpPath,
  ContactsHelpList,
  ColorTitle,
} from './styled'

export const ContactsHelp: FC = () => {
  return (
    <ContactsHelpContainer>
      <ContactsHelpWrapper>
        <ContactsHelpPath>
          <ContactsHelpLink href={Routes.Home}>
            Home
          </ContactsHelpLink>{' '}
          | Contacts
        </ContactsHelpPath>
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
