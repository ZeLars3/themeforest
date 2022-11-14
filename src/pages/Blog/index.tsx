import {
  FC,
  useCallback,
  useMemo,
  useState,
} from 'react'

import { BlogNewsItem } from '@/components'

import { BLOG_NEWS_ITEMS } from '@/constants'
import { Search } from '@/components/common/Search'
import { IBlogNewsItem } from '@/types'

import { BlogList } from './styled'

const Blog: FC = () => {
  const [searchTerm, setsearchTerm] = useState<string>('')
  const handleChangeValue = useCallback(
    (value: string): void => setsearchTerm(value),
    [],
  )

  const searchResults: IBlogNewsItem[] = useMemo(
    () =>
      BLOG_NEWS_ITEMS.filter(({ title }) =>
        title
          .toLowerCase()
          .includes(searchTerm.toLocaleLowerCase()),
      ),
    [searchTerm],
  )

  return (
    <>
      <Search
        value={searchTerm}
        setValue={handleChangeValue}
      />
      <BlogList>
        {searchResults.map(({ title, text, image, id }) => (
          <BlogNewsItem
            key={id}
            title={title}
            text={text}
            image={image}
          />
        ))}
      </BlogList>
    </>
  )
}

export default Blog
