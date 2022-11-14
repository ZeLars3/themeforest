import { ChangeEventHandler, FC } from 'react'

import { SearchInput, SearchWrapper } from './styled'

export const Search: FC<{
  value: string,
  setValue(value: string): void,
}> = ({ value, setValue }) => {
  const handleChange: ChangeEventHandler<
    HTMLInputElement
  > = ({ target: { value } }) => {
    setValue(value)
  }

  return (
    <SearchWrapper>
      <SearchInput
        value={value}
        onChange={handleChange}
        placeholder="Search"
      />
    </SearchWrapper>
  )
}
