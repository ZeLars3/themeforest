import styled from 'styled-components'
import Stack from '@mui/material/Stack'
import Typography  from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import Box from '@mui/material/Box'

export const StatisticContainer = styled.section``

export const StatisticWrapper = styled(Stack)`
  padding: 120px 16px 80px 16px;
  align-items: center;
  max-width: 1110px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 50px 16px;
  }
`

export const StatisticTitle = styled(Typography)`
  text-align: center;

  @media (max-width: 768px) {
    font-size: 29px !important;
    line-height: 40px !important;
  }
`

export const StatisticAmounts = styled(List)`
  display: flex;
`

export const StatisticAmountItem = styled(ListItem)`
  flex-direction: column;
  margin-right: 31px;
  max-width: 156px;
  padding-left: 0 !important;
  padding-right: 0 !important;

  &:last-child {
    margin-right: 61px;
  }

  @media (max-width: 768px) {
    &:last-child {
      margin-right: 0;
    }
  }
`

export const ItemName = styled(Typography)<{ component: string }>`
  @media (max-width: 768px) {
    font-size: 14px !important;
    line-height: 24px !important;
  }
`

export const StatisticWrapperInner = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 50px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 0;
    width: 100% !important;
  }
`

export const StatisticText = styled(Typography)`
  max-width: 540px;

  @media (max-width: 768px) {
    padding: 20px 0;
    text-align: center;
    font-size: 14px !important;
    line-height: 24px !important;
  }
`

export const CompanyIcon = styled.img<any>`
  max-width: 175px;
  max-height: 130px;
  background-image: ${({ icon }) => icon};

  @media (max-width: 768px) {
    max-width: 92px;
    max-height: 65px;
  }
`

export const ItemCount = styled.span`
  font-weight: 800;
  font-size: 50px;
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 70px;
  }
`

export const StatisticCompanies = styled(List)`
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`
