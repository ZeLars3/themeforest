import { FC } from 'react'

import { BlogNewsItem } from '@/components'

import { BlogList } from './styled'
import { BLOG_NEWS_ITEMS } from '@/constants'

const Blog: FC = () => {
  return (
    <>
      <BlogList>
        {BLOG_NEWS_ITEMS.map(
          ({ title, text, image, id }) => (
            <BlogNewsItem
              key={id}
              title={title}
              text={text}
              image={image}
            />
          ),
        )}
      </BlogList>
    </>
  )
}

export default Blog
