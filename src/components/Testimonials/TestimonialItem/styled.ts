import styled from 'styled-components'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export const TestimonialItemContainer = styled(Stack)`
  max-width: 350px;
  margin: 20px auto;
  padding: 35px;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.gray};
  ${({ theme }) => theme.shadows.shadowCard3};
`

export const TestimonialItemWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding-bottom: 26px;
  }
`
export const TestimonialItemAvatar = styled(Box)`
  margin-right: 20px;
  overflow: hidden;
`

export const Icon = styled.img`
  width: 80px;
  height: 80px;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`

export const TestimonialItemPosition = styled(Typography)`
  color: ${({ theme }) => theme.colors.grey} !important;

  @media (max-width: 768px) {
    font-size: 14px !important;
    line-height: 24px !important;
  }
`

export const TestimonialItemText = styled(Typography)`
  @media (max-width: 768px) {
    font-size: 14px !important;
    line-height: 24px !important;
  }
`

export const TestimonialItemName = styled(Typography)``
export const TestimonialItemInfo = styled.div``
