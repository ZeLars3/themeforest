import styled from 'styled-components'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

export const AboutUsStatisticContainer = styled.section`
  padding: 100px 16px 140px 16px;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    padding: 50px 16px 45px 16px;
  }
`

export const AboutUsStatisticWrapper = styled(Box)`
  max-width: 1110px;
  margin: 0 auto;
  text-align: center;
`

export const AboutUsStatisticTitle = styled(Typography)`
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    font-size: 30px !important;
    line-height: 40px !important;
  }
`

export const AboutUsStatisticList = styled(List)`
  padding-top: 80px !important;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-top: 35px !important;
  }
`

export const AboutUsStatisticItem = styled(ListItem)`
  flex-direction: column;
  max-width: 255px;
  border-right: 1px solid
    ${({ theme }) => theme.colors.helperBlue3};

  @media (max-width: 768px) {
    padding-bottom: 70px !important;
    border-right: none;

    &:last-child {
      padding-bottom: 0;
    }
  }
`

export const ItemCount = styled.span`
  font-weight: 800;
  font-size: 56px;
  line-height: 112px;
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    padding-bottom: 15px;
    font-size: 50px;
    line-height: 50px;
  }
`

export const ItemName = styled(Typography)<{ component: string }>`
  font-weight: 700 !important;
`
