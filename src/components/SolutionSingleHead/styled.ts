import styled from 'styled-components'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

export const SolutionSingleHeadContainer = styled.section`
  padding: 60px 16px 160px 16px;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    padding: 35px 16px 60px 16px;
  }
`

export const SolutionSingleHeadTitle = styled(Typography)`
  padding-bottom: 20px;
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    font-size: 30px !important;
    line-height: 40px !important;
  }
`

export const SolutionSingleHeadWrapper = styled(Stack)`
  text-align: center;
  align-items: center;
`
