import styled from 'styled-components'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

export const BenefitsContainer = styled.section`
  padding: 120px 16px;
  background-color: ${({ theme }) =>
    theme.colors.background};

  @media (max-width: 768px) {
    padding: 50px 16px;
  }
`

export const BenefitsWrapper = styled(Stack)`
  max-width: 1110px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column !important;
  }
`

export const BenefitsTitle = styled(Typography)`
  padding-bottom: 30px !important;

  @media (max-width: 768px) {
    padding-bottom: 20px !important;
    font-size: 30px !important;
    line-height: 40px !important;
  }
`

export const BenefitsText = styled(Typography)`
  @media (max-width: 768px) {
    font-size: 14px !important;
    line-height: 24px !important;
  }
`

export const TextWrapper = styled(Box)`
  align-self: center;
  max-width: 540px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

export const BenefitsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-left: 30px;

  @media (max-width: 768px) {
    display: block;
    padding-top: 30px;
    margin-left: 0;
  }
`
