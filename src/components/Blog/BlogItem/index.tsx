import { FC } from 'react'
import {
  NavigateFunction,
  useNavigate,
} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import ArrowRightSmall from 'assets/icons/arrowRightSmall.png'
import { IBlogItem } from 'types'

import {
  BlogItemContainer,
  BlogItemDate,
  BlogItemImage,
  BlogItemText,
  BlogItemTitle,
  BlogItemWrapper,
  Button,
  Icon
} from './styled'
import { Routes } from 'enums'

export const BlogItem: FC<IBlogItem> = ({
  img,
  date,
  title,
  text,
}) => {
  const navigate: NavigateFunction = useNavigate()

  const handleNavigate = (): void => {
    navigate(`${Routes.Blog}/${uuidv4()}`)
  }

  return (
    <BlogItemContainer>
      <BlogItemImage src={img} alt="Blog picture" />
      <BlogItemWrapper>
        <BlogItemDate>{date}</BlogItemDate>
        <BlogItemTitle>{title}</BlogItemTitle>
        <BlogItemText>{text}</BlogItemText>
        <Button onClick={handleNavigate}>
          Read more <Icon src={ArrowRightSmall} />
          </Button>
      </BlogItemWrapper>
    </BlogItemContainer>
  )
}
