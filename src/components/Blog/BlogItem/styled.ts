import styled from 'styled-components'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export const BlogItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  padding-top: 50px;

  @media (max-width: 768px) {
    flex-direction: row;
    padding-top: 20px;
  }
`

export const BlogItemDate = styled(Typography)`
  margin: 20px 0 12px 0 !important;
  color: ${({ theme }) => theme.colors.grey} !important;

  @media (max-width: 768px) {
    margin: 0 !important;
  }
`

export const BlogButton = styled(Button)`
  text-align: left;
  display: block !important;
  font-size: 14px !important;
  padding: 0 !important;

  &:hover {
    color: ${({ theme }) => theme.colors.hover} !important;
  }
`

export const BlogItemTitle = styled(Typography)`
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    padding: 6px 0 !important;
    font-size: 14px !important;
    line-height: 24px !important;
  }
`

export const BlogItemText = styled(Typography)`
  padding: 12px 0;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Icon = styled.img`
  padding-left: 7px;
`

export const BlogItemImage = styled.img`
  @media (max-width: 768px) {
    padding-right: 8px;
    max-width: 160px;
    max-height: 96px;
  }
`

export const BlogItemWrapper = styled(Stack)``