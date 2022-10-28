import {
  createRef,
  FC,
  useState,
} from 'react'

import { useReadingProgress } from 'hooks'
import { SOLUTION_SINGLE_ITEMS } from 'constants/index'

import {
  SolutionSingleMainWrapper,
  SolutionSingleMainSidebar,
  ProgressBar,
  SolutionSidebarItem,
  SolutionContent,
} from './styled'
import { SolutionSingleArticle } from './SolutionSingleArticle'

export const SolutionSingleMain: FC = () => {
  const [activeCategory, setActiveCategory] = useState(1)
  const progress = useReadingProgress()

  const refs = SOLUTION_SINGLE_ITEMS.reduce(
    (refsObj: any, solution) => {
      refsObj[solution.name] = createRef()
      return refsObj
    },
    {},
  )

  const moveToArticle = (name: string) => (): void => {
    refs[name].current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }



  return (
    <SolutionSingleMainWrapper>
      <SolutionSingleMainSidebar>
        <ProgressBar
          style={{
            transform: `translateX(${progress - 100}%)`,
          }}
        />
        {SOLUTION_SINGLE_ITEMS.map(({ id, name }) => {
          return (
            <SolutionSidebarItem
              id={id}
              key={id}
              activeCategory={activeCategory}
              onClick={moveToArticle(name)}>
              <span>{name}</span>
            </SolutionSidebarItem>
          )
        })}
      </SolutionSingleMainSidebar>
      <SolutionContent>
        {SOLUTION_SINGLE_ITEMS.map(
          ({ id, name, text, img, list }) => {
            return (
              <SolutionSingleArticle
                key={id}
                name={name}
                id={id}
                text={text}
                img={img}
                list={list}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                refs={refs}
              />
            )
          },
        )}
      </SolutionContent>
    </SolutionSingleMainWrapper>
  )
}
