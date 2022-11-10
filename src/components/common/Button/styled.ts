import styled from 'styled-components'
import Button from '@mui/material/Button'

export const ButtonContainer = styled(Button)`
  display: flex !important;
  align-items: center;
  justify-content: center;
  height: auto;
  border-radius: 6px !important;
  transition: 0.7s;
  text-transform: none !important;
  background-color: ${({ theme }) => theme.colors.primary} !important;
  color: ${({ theme }) => theme.colors.white} !important;

  &:hover {
    background: ${({ theme }) => theme.colors.hover} !important;
  }
`
