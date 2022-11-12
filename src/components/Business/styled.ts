import styled from 'styled-components'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export const BusinessContainer = styled.section`
  padding: 120px 16px;

  @media (max-width: 768px) {
    padding: 50px 16px;
  }
`

export const BusinessWrapper = styled(Stack)`
  align-items: center;
  max-width: 1110px;
  margin: 0 auto;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column !important;
  }
`

export const BusinessTitle = styled(Typography)`
  width: 540px;

  @media (max-width: 768px) {
    width: 100% !important;
    font-size: 30px !important;
    line-height: 40px !important;
  }
`

export const ColorTitle = styled(Typography)<{ component: string }>`
  @media (max-width: 768px) {
    width: 100% !important;
    font-size: 30px !important;
    line-height: 40px !important;
  }
`

export const BusinessWrapperInner = styled(Stack)`
  width: 540px;
  padding-left: 30px;

  button {
    font-weight: 700;
    padding: 15px 35px;
    width: 190px;
  }

  @media (max-width: 768px) {
    padding: 20px 0 0 0;
    width: 100%;

    button {
      width: 100%;
    }
  }
`

export const BusinessText = styled(Typography)`
  padding-bottom: 30px !important;

  @media (max-width: 768px) {
    font-size: 14px !important;
    line-height: 24px !important;
  }
`
