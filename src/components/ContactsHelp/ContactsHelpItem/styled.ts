import styled from 'styled-components'
import Typography from '@mui/material/Typography'

export const ContactsInfoItem = styled.li`
  flex-grow: 1;
  margin-right: 47px;
  list-style: none;

  @media (max-width: 768px) {
    margin: 0 0 20px 0;
  }

  svg {
    max-width: 20px;
    margin-right: 14.5px;
  }
`

export const ContactsHelpTitle = styled(Typography)`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
  font-weight: 600 !important;
`

export const ContactsHelpText = styled(Typography)``
export const TitleText = styled.span``
