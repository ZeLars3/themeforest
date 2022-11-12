import styled from 'styled-components'
import Box from '@mui/material/Box'
import List from '@mui/material/List'

export const FAQsListContainer = styled(Box)`
  padding: 0 0 120px 0;

  @media (max-width: 768px) {
    padding: 0 16px 50px 16px;
  }
`

export const FAQsListWrapper = styled(List)`
  display: flex;
  flex-direction: column;
  margin: 0 auto !important;
  max-width: 1110px;
`
