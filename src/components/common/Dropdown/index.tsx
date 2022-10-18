import { useNavigate } from 'react-router-dom'
import { ChangeEventHandler, FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { HEADER_DROPDOWN_ITEMS } from 'constants/headerDropdown'

import { DropdownSelect, OptionStyled } from './styled'

export const Dropdown: FC = () => {
  const navigate = useNavigate()

  const handleNavigate: ChangeEventHandler<
  HTMLSelectElement
  > = event => {
    navigate(event.target.value)
  }

  return (
    <DropdownSelect
      defaultValue="Pages"
      onChange={handleNavigate}>
      <OptionStyled hidden disabled value="Pages">
        Pages
      </OptionStyled>
      {HEADER_DROPDOWN_ITEMS.map(({ route, name }) => (
        <OptionStyled key={uuidv4()} value={route}>
          {name}
        </OptionStyled>
      ))}
    </DropdownSelect>
  )
}
