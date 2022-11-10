import { FC } from 'react'
import {
  NavigateFunction,
  useNavigate,
} from 'react-router-dom'

import { Routes } from '@/enums'
import { Button } from '@/components/common'
import TeamDiscussion from '@/assets/img/teamDiscussion.jpg'
import TeamDiscussionSmall from '@/assets/img/teamDiscussionSmall.jpg'
import { useTypedSelector } from '@/hooks'

import {
  SolutionContainer,
  Image,
  SolutionText,
  SolutionTitle,
  WrapperImage,
  WrapperInner,
  SolutionWrapper,
} from './styled'

export const NewSolutions: FC = () => {
  const navigate: NavigateFunction = useNavigate()
  const currentViewport: string = useTypedSelector(
    ({ app }) => app.viewport,
  )

  const handleNavigate = (): void => {
    navigate(Routes.Solutions)
  }

  return (
    <SolutionContainer>
      <SolutionWrapper>
        <WrapperImage>
          <Image
            src={
              currentViewport === 'desktop'
                ? TeamDiscussion
                : TeamDiscussionSmall
            }
            alt="Team discussion"
          />
        </WrapperImage>
        <WrapperInner>
          <SolutionTitle>
            Radically new solutions for data
          </SolutionTitle>
          <SolutionText>
            Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </SolutionText>
          <Button
            variant='contained'
            clickHandle={handleNavigate}>
            Learn more
          </Button>
        </WrapperInner>
      </SolutionWrapper>
    </SolutionContainer>
  )
}
