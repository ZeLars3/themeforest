import styled from 'styled-components'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export const AboutUsSayItemLink = styled(Link)`
  text-decoration: none !important;
`

export const AboutUsSayItemWrapper = styled(Stack)`
  margin: 20px auto;
  padding: 35px;
  border-radius: 6px;
  ${({ theme }) => theme.shadows.shadowCard3};

  @media (max-width: 768px) {
    margin: 20px auto 10px auto;
    max-width: 272px;
    padding: 25px;
  }
`

export const AboutUsSayItemAvatar = styled.img`
  position: absolute;
  z-index: 1;
  top: -20px;
  width: 80px;
  height: 80px;
  overflow: hidden;

  @media (max-width: 768px) {
    top: -10px;
    width: 60px;
    height: 60px;
  }
`

export const AboutUsSayItemName = styled(Typography)`
  padding-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 16px !important;
    line-height: 24px !important;
  }
`

export const AboutUsSayItemPosition = styled(Typography)`
  color: ${({ theme }) => theme.colors.grey} !important;

  @media (max-width: 768px) {
    font-weight: 500 !important;
  }
`

export const AboutUsSayItemText = styled(Typography)`
  margin: 35px 0 !important;

  @media (max-width: 768px) {
    margin: 30px 0 20px 0 !important;
    font-size: 14px !important;
    line-height: 24px !important;
  }
`
