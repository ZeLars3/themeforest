import styled from 'styled-components'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'

export const AllServicesWrapper = styled(Box)`
  max-width: 330px;
  margin: 0 auto;
`

export const AllServicesListWrapper = styled(List)`
  padding: 16px 0;

  @media (max-width: 360px) {
    padding: 50px 0;
  }
`

export const Title = styled(Typography)`
  padding: 0 0 20px 0 !important;
`

export const AllServicesItem = styled(ListItemButton)<any>`
  justify-content: space-between !important;
  padding: 10px 0 !important;
  border-top: 1px solid ${({ theme }) =>
    theme.colors.grey} !important;;

  &:last-child {
    border-bottom: 1px solid ${({ theme }) =>
      theme.colors.grey};
  }
`

export const Icon = styled.img``
