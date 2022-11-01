import { FC } from 'react'
import {
  NavigateFunction,
  useNavigate,
} from 'react-router-dom'

import ArrowRightSmall from '@/assets/icons/arrowRightSmall.png'
import { IBlogItem } from '@/types'
import { Routes } from '@/enums'

import {
  BlogItemContainer,
  BlogItemDate,
  BlogItemImage,
  BlogItemText,
  BlogItemTitle,
  BlogItemWrapper,
  Button,
  Icon,
} from './styled'

export const BlogItem: FC<IBlogItem> = ({
  img,
  date,
  title,
  text,
  id,
}) => {
  const navigate: NavigateFunction = useNavigate()

  const handleNavigate = (): void => {
    navigate(`${Routes.Blog}/id=${id}`)
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