import styled from 'styled-components'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

export const AboutUsInfoContainer = styled.section`
  padding: 120px 16px;

  @media (max-width: 768px) {
    padding: 50px 16px 0 16px;
  }
`

export const AboutUsInfoWrapper = styled(Box)`
  max-width: 1110px;
  margin: 0 auto;
`

export const AboutUsInfoItem = styled(Stack)`
  &:first-child {
    margin-bottom: 134px;
  }

  @media (max-width: 768px) {
    flex-direction: column !important;

    &:first-child {
      margin-bottom: 50px;
    }

    &:last-child {
      flex-direction: column-reverse !important;
    }
  }
`

export const AboutUsInfoTitle = styled(Typography)`
  padding-bottom: 30px;
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    padding-bottom: 20px;
    font-size: 30px !important;
    line-height: 40px !important;
  }
`

export const AboutUsInfoText = styled(Typography)`
  @media (max-width: 768px) {
    font-size: 14px !important;
    line-height: 24px !important;
  }
`

export const AboutUsInfoImg = styled.img`
  max-height: 453px;

  &:first-child {
    margin-right: 30px;
  }

  &:last-child {
    margin-left: 30px;
  }

  @media (max-width: 768px) {
    padding-top: 30px;

    &:first-child {
      margin-right: 0;
    }

    &:last-child {
      margin-left: 0;
    }
  }
`

export const AboutUsInfoWrapperText = styled(Stack)``
