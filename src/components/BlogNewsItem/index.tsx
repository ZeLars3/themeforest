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
        <BlogNewsItemTitle variant="h3">
          {title}
        </BlogNewsItemTitle>
        <BlogNewsItemText variant="body1">
          {text}
        </BlogNewsItemText>
      </BlogNewsItemInfo>
    </BlogNewsItemContainer>
  )
}
