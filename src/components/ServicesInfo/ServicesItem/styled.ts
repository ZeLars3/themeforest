import styled from 'styled-components'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export const ServiceItemContainer = styled.li`
  padding: 20px;

  @media (max-width: 768px) {
    margin: 0 auto 30px auto;
  }
`

export const ServiceItemTitle = styled(Typography)`
  padding: 25px 0 16px 0;

  @media (max-width: 768px) {
    font-size: 20px !important;
    line-height: 30px !important;
  }
`

export const ServiceItemText = styled(Typography)`
  padding-bottom: 20px;
  max-width: 470px;

  @media (max-width: 768px) {
    font-size: 14px !important;
    line-height: 24px !important;
  }
`

export const ReadButton = styled(Button)`
  font-size: 14px !important;
  padding: 0 !important;

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }
`

export const Icon = styled.img`
  margin-left: 7px;
`
