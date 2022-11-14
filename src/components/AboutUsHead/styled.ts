import styled from 'styled-components'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export const AboutUsHeadContainer = styled.section`
  background: ${({ theme }) => theme.colors.background};
  padding: 60px 16px 160px 16px;

  @media (max-width: 768px) {
    padding: 35px 16px 60px 16px;
  }
`

export const AboutUsHeadWrapper = styled(Stack)`
  align-items: center;
`

export const AboutUsHeadTitle = styled(Typography)`
  padding-bottom: 20px;
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    font-size: 30px !important;
    line-height: 40px !important;
  }
`
