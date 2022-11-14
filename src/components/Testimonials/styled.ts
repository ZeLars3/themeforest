import styled from 'styled-components'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'

export const TestimonialsContainer = styled.section`
  padding: 120px 16px;

  @media (max-width: 768px) {
    padding: 50px 16px;
  }
`

export const TestimonialsWrapper = styled(Stack)`
  max-width: 1110px;
  margin: 0 auto;
  justify-content: space-between;
  padding-bottom: 50px;
`

export const TestimonialsTitle = styled(Typography)`
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    font-size: 30px !important;
    line-height: 40px !important;
  }
`

export const TestimonialsController = styled(Stack)`
  gap: 15px;
`

export const TestimonialButton = styled.button`
  width: 110px;
  padding: 15px 40px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 20px;
  background-color: ${({ theme }) =>
    theme.colors.background};

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.hover};
  }

  @media (max-width: 768px) {
    display: flex;
    padding: 15.8px;
    width: 48px;
    height: 40px;
  }
`

export const TestimonialsList = styled(List)`
  display: flex;
  max-width: 1110px;
  margin: 0 auto !important;
`

export const Icon = styled.img`
  @media (max-width: 768px) {
    width: 16.8px;
    height: 9px;
  }
`
