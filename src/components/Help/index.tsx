import { FC } from 'react'

import { Button } from '@/components/common'

import {
  HelpContainer,
  HelpText,
  HelpTitle,
  HelpWrapper
} from './styled'

export const Help: FC = () => {
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
          size="big"
          btnType="square">
          Contact us
        </Button>
      </HelpWrapper>
    </HelpContainer>
  )
}
