import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { CONTACT_ITEMS } from '@/constants/contactItems'

import {
  ContactsInfoItem,
  InfoTitle,
  InfoSubtitle,
} from './styled'

export const AboutUsContactItem: FC = () => {
  return (
    <>
      {CONTACT_ITEMS.map(({ name, title }) => (
        <ContactsInfoItem key={uuidv4()}>
          <InfoTitle>{name}</InfoTitle>
          <InfoSubtitle>{title}</InfoSubtitle>
        </ContactsInfoItem>
      ))}
    </>
  )
}
