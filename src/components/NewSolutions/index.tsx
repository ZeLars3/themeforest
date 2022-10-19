import { FC } from 'react'
import {
  NavigateFunction,
  useNavigate
} from 'react-router-dom'

import { Routes } from 'enums'
import { Button } from 'components/common'
import TeamDiscussion from 'assets/img/teamDiscussion.jpg'

import {
  SolutionContainer,
  Image,
  SolutionText,
  SolutionTitle,
  WrapperImage,
  WrapperInner
} from './styled'

export const NewSolutions: FC = () => {
  const navigate: NavigateFunction = useNavigate()

  const handleNavigate = (): void => {
    navigate(Routes.Solutions)
  }

  return (
    <SolutionContainer>
      <WrapperImage>
        <Image src={TeamDiscussion} alt="Team discussion" />
      </WrapperImage>
      <WrapperInner>
        <SolutionTitle>
          Radically new solutions
          <br /> for data
        </SolutionTitle>
        <SolutionText>
          Sed ut perspiciatis unde omnis iste natus error
          sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae
          vitae dicta sunt explicabo.
        </SolutionText>
        <Button
          size="big"
          btnType="square"
          clickHandle={handleNavigate}>
          Learn more
        </Button>
      </WrapperInner>
    </SolutionContainer>
  )
}
