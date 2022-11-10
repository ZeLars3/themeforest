import { FC } from 'react'

import { Button } from '@/components/common'
import { ContactForm } from '@/components/forms/ContactForm'
import { useTypedSelector } from '@/hooks'

import {
  AboutUsContactContainer,
  AboutUsContactList,
  AboutUsContactText,
  AboutUsContactTitle,
  AboutUsContactWrapper,
  AboutUsContactWrapperText,
} from './styled'
import { AboutUsContactItem } from './AboutUsContactItem'

export const AboutUsContact: FC = () => {
  const currentViewport: string = useTypedSelector(
    ({ app }) => app.viewport,
  )

  return (
    <AboutUsContactContainer>
      <AboutUsContactWrapper>
        <AboutUsContactWrapperText>
          <AboutUsContactTitle>
            Left questions? Contacts us now for a free
            consultation and free trial!
          </AboutUsContactTitle>
          <AboutUsContactText>
            Ut enim ad minima veniam, quis nostrum
            exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi.
          </AboutUsContactText>
          <AboutUsContactList>
            <AboutUsContactItem />
          </AboutUsContactList>
        </AboutUsContactWrapperText>
        <AboutUsContactWrapperText>
          <ContactForm title="Contact Us" titleSize="big" />
        </AboutUsContactWrapperText>
        {currentViewport === 'desktop' ? null : (
          <Button variant="contained">Contact us</Button>
        )}
      </AboutUsContactWrapper>
    </AboutUsContactContainer>
  )
}
