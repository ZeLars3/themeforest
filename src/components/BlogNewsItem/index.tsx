import { FC } from 'react'

import { IBlogNewsItem } from '@/types'

import {
  BlogNewsItemContainer,
  BlogNewsItemTitle,
  BlogNewsItemInfo,
  BlogNewsItemImg,
  BlogNewsItemText,
} from './styled'

export const BlogNewsItem: FC<IBlogNewsItem> = ({
  title,
  text,
  image,
}) => {
  return (
    <BlogNewsItemContainer>
      <BlogNewsItemImg src={image}></BlogNewsItemImg>
      <BlogNewsItemInfo>
        <BlogNewsItemTitle>{title}</BlogNewsItemTitle>
        <BlogNewsItemText>{text}</BlogNewsItemText>
      </BlogNewsItemInfo>
    </BlogNewsItemContainer>
  )
}
