import { FC, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ISolutionSingleItem } from 'types'

import {
  Img,
  SolutionSingleArticleItem,
  ItemDefenition,
  ItemDescription,
  SolutionSingleArticleList,
  SolutionContentText,
  SolutionSingleArticleTitle,
  SolutionSingleArticleWrapper,
} from './styled'

export const SolutionSingleArticle: FC<ISolutionSingleItem> = ({
  id,
  name,
  text,
  list,
  img,
  refs,
  setActiveCategory,
  pageHeight,
  activeCategory,
}) => {
  const observerMargin: number = Math.floor(pageHeight as number / 2)

  useEffect(() => {
    const observerConfig = {
      rootMargin: `0px 0px -400px 0px`,
    }

    const handleIntersection = (entries: any): void => {
      entries.forEach(({ target, isIntersecting }: any) => {
        if (
          target.id !== activeCategory &&
          isIntersecting
        ) {
          setActiveCategory(target.id)
        }
      })
    }

    const observer = new IntersectionObserver(
      handleIntersection,
      observerConfig,
    )
    observer.observe(refs[name].current)
    
    return () => observer.disconnect()
  }, [
    activeCategory,
    setActiveCategory,
    observerMargin,
    refs,
    name,
    pageHeight,
  ])

  return (
    <SolutionSingleArticleWrapper>
      <SolutionSingleArticleTitle ref={refs[name]} id={id}>
        {name}
      </SolutionSingleArticleTitle>
      {img && <Img src={img} />}
      <SolutionContentText>{text}</SolutionContentText>
      {list && (
        <SolutionSingleArticleList>
          {list.map(({ defenition, description }) => 
              <SolutionSingleArticleItem key={uuidv4()}>
                <ItemDefenition>
                  {defenition}
                </ItemDefenition>
                <ItemDescription>
                  {description}
                </ItemDescription>
              </SolutionSingleArticleItem>
            )
          }
        </SolutionSingleArticleList>
      )}
    </SolutionSingleArticleWrapper>
  )
}
