import styled from 'styled-components'
import Stack from '@mui/material/Stack'
import InputBase from '@mui/material/InputBase'

export const SearchWrapper = styled(Stack)`
  max-width: 400px;
  margin: 10px auto;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
`

export const SearchInput = styled(InputBase)`
  padding: 15px 20px;
`
