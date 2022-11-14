import styled from 'styled-components'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'

export const ContactsInfoItem = styled(ListItem)`
  margin-bottom: 24px;
  display: block !important;
  padding: 0 !important;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`

export const InfoSubtitle = styled(Typography)`
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    max-width: 300px;
    font-weight: 600 !important;
    font-size: 14px !important;
    line-height: 24px !important;
  }
`

export const InfoTitle = styled(Typography)``
