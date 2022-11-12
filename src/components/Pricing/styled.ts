import styled from 'styled-components'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export const PricingContainer = styled.section`
  padding: 0 16px;
`

export const PricingWrapper = styled(Box)`
  max-width: 1110px;
  margin: 0 auto;
`

export const PricingTitle = styled(Typography)`
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    font-size: 30px !important;
    line-height: 40px !important;
  }
`

export const PriceList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  width: 100%;
  margin-top: 50px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`
