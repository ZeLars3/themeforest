import styled from 'styled-components'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import List from '@mui/material/List'

export const AboutUsSayContainer = styled.section`
  padding: 0 16px 120px 16px;

  @media (max-width: 768px) {
    padding: 0 16px 50px 16px;
  }
`

export const AboutUsSayWrapper = styled(Stack)`
  max-width: 1110px;
  margin: 0 auto;
  justify-content: space-between;
`

export const AboutUsSayTitle = styled(Typography)`
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    padding-bottom: 15px;
    text-align: center;
    font-size: 30px !important;
    line-height: 40px !important;
  }
`

export const AboutUsSayController = styled(Stack)`
  gap: 10px;
`

export const AboutUsSayButton = styled.button`
  width: 110px;
  padding: 15px 40px;
  border-radius: 20px;
  background-color: ${({ theme }) =>
    theme.colors.background};

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.tertiary};
  }

  @media (max-width: 768px) {
    display: flex;
    padding: 15.8px;
    width: 48px;
    height: 40px;
  }
`

export const Icon = styled.img`
  @media (max-width: 768px) {
    width: 16.8px;
    height: 9px;
  }
`

export const AboutUsSayList = styled(List)`
  display: flex;
  max-width: 1110px;
  margin: 0 auto;
  padding: 80px 0 0 0 !important;

  @media (max-width: 768px) {
    padding: 0 !important;
  }
`
