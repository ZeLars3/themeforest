import styled from 'styled-components'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export const ServicesInfoContainer = styled.section`
  padding: 100px 16px 20px 16px;

  @media (max-width: 768px) {
    padding: 74px 16px 20px 16px;
  }
`

export const ServicesInfoWrapper = styled(Stack)`
  margin: 0 auto;
  max-width: 1110px;
`

export const ServicesInfoWrapperHead = styled(Stack)`
  margin: 0 auto;
  text-align: center;
  padding-bottom: 120px;

  @media (max-width: 768px) {
    padding-bottom: 50px;
  }
`

export const ServicesInfoText = styled(Typography)`
  color: ${({ theme }) => theme.colors.primary} !important;
`

export const ServicesInfoTitle = styled(Typography)`
  padding: 15px 0;

  @media (max-width: 768px) {
    font-size: 30px !important;
    line-height: 40px !important;
  }
`

export const ServicesInfoSubtitle = styled(Typography)`
  max-width: 730px;

  @media (max-width: 768px) {
    font-size: 14px !important;
    line-height: 24px !important;
  }
`

export const ServicesInfoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
