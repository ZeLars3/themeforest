import { FC } from 'react'

import {
  ServiceSingleList,
  AllServicesList,
  ServiceSingleHead,
} from '@/components'
import { ContactsHelpItem } from '@/components/ContactsHelp/ContactsHelpItem'
import { Button } from '@/components/common'

import {
  ContactSubtitle,
  ContactTitle,
  ContactWrapper,
  Wrapper,
  WrapperItem,
} from './styled'

const ServiceSingle: FC = () => {
  return (
    <>
      <ServiceSingleHead />
      <Wrapper>
        <ServiceSingleList />
        <WrapperItem>
          <AllServicesList />
          <ContactWrapper>
            <ContactTitle>Contact information</ContactTitle>
            <ContactSubtitle>
              Fill up the form and our Team will get back
              to you with 25 hours.
            </ContactSubtitle>
            <ContactsHelpItem />
            <Button btnType='round' size='big'>
              Contact Us
            </Button>
          </ContactWrapper>
        </WrapperItem>
      </Wrapper>
    </>
  )
}

export default ServiceSingle
