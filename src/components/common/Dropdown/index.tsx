import {
  NavigateFunction,
  useNavigate
} from 'react-router-dom'
import { ChangeEventHandler, FC, } from 'react'
import { v4 as uuidv4, } from 'uuid'

import { HEADER_DROPDOWN_ITEMS, } from '@/constants/headerDropdown'

import { DropdownSelect, DropdownOption, } from './styled'

export const Dropdown: FC = () => {
  const navigate: NavigateFunction = useNavigate()

  const handleNavigate: ChangeEventHandler<
  HTMLSelectElement
  > = event => {
    navigate(event.target.value)
  }

  return (
    <DropdownSelect
      defaultValue="Pages"
      onChange={handleNavigate}>
      <DropdownOption hidden disabled value="Pages">
        Pages
      </DropdownOption>
      {HEADER_DROPDOWN_ITEMS.map(({ route, name, }) => (
        <DropdownOption key={uuidv4()} value={route}>
          {name}
        </DropdownOption>
      ),)}
    </DropdownSelect>
  )
}
