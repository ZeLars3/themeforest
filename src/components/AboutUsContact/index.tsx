import { FC } from 'react'
import {
  NavigateFunction,
  useNavigate,
} from 'react-router-dom'
import Button from '@mui/material/Button'

import { ContactForm } from '@/components/forms/ContactForm'
import { useTypedSelector } from '@/hooks'
import { Routes } from '@/enums'

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
  const navigate: NavigateFunction = useNavigate()

  const currentViewport: string = useTypedSelector(
    ({ app }) => app.viewport,
  )

  const handleNavigate = (): void => {
    navigate(Routes.Contacts)
  }
  return (
    <AboutUsContactContainer>
      <AboutUsContactWrapper direction="row">
        <AboutUsContactWrapperText>
          <AboutUsContactTitle variant="h2">
            Left questions? Contacts us now for a free
            consultation and free trial!
          </AboutUsContactTitle>
          <AboutUsContactText variant="body1">
            Ut enim ad minima veniam, quis nostrum
            exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi.
          </AboutUsContactText>
          <AboutUsContactList>
            <AboutUsContactItem />
          </AboutUsContactList>
        </AboutUsContactWrapperText>
        <AboutUsContactWrapperText>
          <ContactForm title="Contact Us" />
        </AboutUsContactWrapperText>
        {currentViewport === 'desktop' ? null : (
          <Button
            variant="contained"
            onClick={handleNavigate}>
            Contact us
          </Button>
        )}
      </AboutUsContactWrapper>
    </AboutUsContactContainer>
  )
}
