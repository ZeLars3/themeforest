import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { CONTACT_ITEMS } from 'constants/contactItems'

import {
  ContactsInfoItem,
  ContactsHelpText,
  ContactsHelpTitle,
  Icon,
} from './styled'

export const ContactsHelpItem: FC = () => {
  return (
    <>
      {CONTACT_ITEMS.map(({ title, name, icon }) => (
        <ContactsInfoItem key={uuidv4()}>
          <ContactsHelpTitle>
            <Icon src={icon} />
            <span>{name}</span>
          </ContactsHelpTitle>
          <ContactsHelpText>
            {title}
          </ContactsHelpText>
        </ContactsInfoItem>
      ))}
    </>
  )
}
