import styled from 'styled-components'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

export const FAQsHeadContainer = styled.section`
  padding: 20px 16px 120px 16px;

  @media (max-width: 768px) {
    padding: 10px 16px 50px 16px;
  }
`

export const FAQsHeadWrapper = styled(Stack)`
  margin: 0 auto;
  max-width: 1110px;
  text-align: center;
`

export const FAQsHeadTitle = styled(Typography)`
  padding: 15px 0;

  @media (max-width: 768px) {
    padding: 12px 0;
    font-size: 30px !important;
    line-height: 40px !important;
  }
`

export const FAQsHeadSubtitle = styled(Typography)`
  margin: 0 auto !important;
  max-width: 540px;

  @media (max-width: 768px) {
    font-size: 14px !important;
    line-height: 24px !important;
  }
`

export const FAQsHeadText = styled(Typography)`
  margin-top: 56px !important;

  @media (max-width: 768px) {
    margin-top: 40px !important;
  }
`
