import styled from 'styled-components'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import List from '@mui/material/List'

export const AboutUsContactContainer = styled.section`
  padding: 120px 16px;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 950px) {
    padding: 60px 16px;
  }
`

export const AboutUsContactWrapper = styled(Stack)`
  max-width: 1110px;
  margin: 0 auto;

  @media (max-width: 950px) {
    flex-direction: column !important;
  }

  @media (max-width: 768px) {
    button {
      justify-content: center;
      width: 100%;
      padding: 15px 0;
      border: none;
      letter-spacing: -0.015em;
    }
  }
`

export const AboutUsContactTitle = styled(Typography)`
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    font-size: 30px !important;
    line-height: 40px !important;
  }
`

export const AboutUsContactText = styled(Typography)`
  margin: 24px 0 80px 0 !important;

  @media (max-width: 768px) {
    display: none;
  }
`

export const AboutUsContactList = styled(List)`
  margin: 40px 0 0 0 !important;
  color: ${({ theme }) => theme.colors.grey};

  @media (max-width: 768px) {
    margin: 30px 0 30px 0 !important;
  }
`

export const AboutUsContactWrapperText = styled(Box)`
  max-width: 540px;

  &:first-child {
    margin: 0 auto 0 0;
  }

  @media (max-width: 768px) {
    max-width: 100%;

    &:nth-child(2) {
      display: none;
    }
  }
`
