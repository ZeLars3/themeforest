import styled from 'styled-components'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

export const ServiceSingleHeadContainer = styled.section`
  padding: 20px 16px 120px 16px;

  @media (max-width: 768px) {
    padding: 10px 16px 50px 16px;
    background: ${({ theme }) => theme.colors.secondary};
  }
`

export const ServiceSingleHeadWrapper = styled(Stack)`
  margin: 0 auto;
  max-width: 1110px;
  text-align: center;
`

export const ServiceSingleTitle = styled(Typography)`
  padding: 15px 0 !important;

  @media (max-width: 768px) {
    padding: 12px 0 !important;
    font-size: 30px !important;
    line-height: 40px !important;
    color: ${({ theme }) => theme.colors.white} !important;
  }
`

export const SolutionsHeadSubtitle = styled(Typography)`
  margin: 0 auto !important;
  max-width: 540px;
`
