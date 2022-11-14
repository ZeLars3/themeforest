import styled from 'styled-components'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export const SolutionsHeadContainer = styled.section`
  padding: 0 16px 120px 16px;

  @media (max-width: 768px) {
    padding: 0 16px 50px 16px;
  }
`

export const SolutionsHeadWrapper = styled(Stack)`
  margin: 0 auto;
  max-width: 1110px;
  text-align: center;
`

export const SolutionsHeadText = styled(Typography)`
  padding-top: 56px;
  color: ${({ theme }) => theme.colors.primary} !important;

  @media (max-width: 768px) {
    padding-top: 40px;
  }
`

export const SolutionsHeadTitle = styled(Typography)`
  padding: 15px 0 !important;

  @media (max-width: 768px) {
    padding: 12px 0 !important;
    font-size: 30px !important;
    line-height: 40px !important;
  }
`

export const SolutionsHeadSubtitle = styled(Typography)`
  margin: 0 auto !important;
  max-width: 540px;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 14px !important;
    line-height: 24px !important;
  }
`
