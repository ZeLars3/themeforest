import { FC } from 'react'

import { SOLUTION_ITEMS } from 'constants/index'
import Solutions from 'assets/img/solutions.jpg'

import {
  SolutionsChooseTitle,
  SolutionsChooseList,
  SolutionsChooseWrapper,
  SolutionsChooseImgWrapper,
  SolutionsChooseMain,
  SolutionsChooseContainer,
  SolutionsChooseImg,
} from './styled'
import { SolutionsChooseItem } from './SolutionsChooseItem'

export const SolutionsChoose: FC = () => {
  return (
    <SolutionsChooseContainer>
      <SolutionsChooseWrapper>
        <SolutionsChooseImgWrapper>
          <SolutionsChooseImg
            src={Solutions}
            alt="Server room"
          />
        </SolutionsChooseImgWrapper>
        <SolutionsChooseMain>
          <SolutionsChooseTitle>
            Why choose us?
          </SolutionsChooseTitle>
          <SolutionsChooseList>
            {SOLUTION_ITEMS.slice(1, 4).map(
              ({ title, text, id }) => (
                <SolutionsChooseItem
                  key={id}
                  title={title}
                  text={text}
                />
              ),
            )}
          </SolutionsChooseList>
        </SolutionsChooseMain>
      </SolutionsChooseWrapper>
    </SolutionsChooseContainer>
  )
}
