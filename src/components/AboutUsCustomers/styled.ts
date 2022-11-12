import styled from 'styled-components'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export const AboutUsCustomersContainer = styled.section`
  padding: 120px 16px;

  @media (max-width: 768px) {
    padding: 50px 16px;
  }
`

export const AboutUsCustomersWrapper = styled(Box)`
  max-width: 1110px;
  margin: 0 auto;
`

export const AboutUsCustomersTitle = styled(Typography)`
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 30px !important;
    line-height: 40px !important;
  }
`

export const AboutUsCustomersSubtitle = styled(Typography)`
  margin: 30px 0 !important;
  max-width: 445px;

  @media (max-width: 768px) {
    text-align: center;
    margin: 20px 0 14px 0 !important;
    font-size: 14px !important;
    line-height: 24px !important;
  }
`

export const CompanyIcon = styled.img<any>`
  max-width: 185px;
  max-height: 132px;
  background-image: ${({ icon }) => icon};

  @media (max-width: 768px) {
    max-width: 92px;
    max-height: 65px;
  }
`

export const AboutUsCustomersWrapperText = styled.div``
export const AboutUsCustomersList = styled.ul``
