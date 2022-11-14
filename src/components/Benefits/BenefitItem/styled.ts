import styled from 'styled-components'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'

export const BenefitListItem = styled(ListItem)`
  flex-direction: column;
  padding: 25px !important;
  align-items: baseline !important;
  max-height: 248px;
  width: 255px !important;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.shadows.shadowCard3};

  &:nth-child(2) {
    margin-top: 56px;
  }

  &:nth-child(3) {
    margin-top: -56px;
  }
`

export const BenefitItemTitle = styled(Typography)`
  letter-spacing: -0.015em;
`

export const Icon = styled.img`
  width: 45px;
  height: 47px;
  margin-bottom: 20px;
`

export const BenefitItemText = styled(Typography)`
  color: ${({ theme }) => theme.colors.grey} !important;
`
