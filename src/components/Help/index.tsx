import { FC } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'

import { Button } from '@/components/common'
import { Routes } from '@/enums'

import {
  HelpContainer,
  HelpText,
  HelpTitle,
  HelpWrapper,
} from './styled'

export const Help: FC = () => {
  const navigate: NavigateFunction = useNavigate()

  const handleNavigate = (): void => {
    navigate(Routes.Contacts)
  }

  return (
    <HelpContainer>
      <HelpWrapper>
        <HelpTitle>Do you need help?</HelpTitle>
        <HelpText>
          Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi.
        </HelpText>
        <Button
          variant="contained"
          clickHandle={handleNavigate}>
          Contact us
        </Button>
      </HelpWrapper>
    </HelpContainer>
  )
}
