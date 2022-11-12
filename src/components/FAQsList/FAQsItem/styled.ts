import styled from 'styled-components'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'

export const FAQsItemContainer = styled(ListItem)`
  max-width: 1110px;
  padding: 35px !important;
  display: block !important;
  list-style: none;
  margin-bottom: 20px;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.grey};

  &:last-child {
    margin-bottom: 0
  }

  @media (max-width: 768px) {
    padding: 15px !important;
  }
`

export const FAQsItemTitle = styled(Typography)<{ isShow: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: -0.015em;
  color: ${({ isShow, theme }) =>
  isShow ? theme.colors.primary : theme.colors.black} !important;

  @media (max-width: 768px) {
    font-size: 16px !important;
    line-height: 24px !important;
  }
`

export const FAQsItemSubtitle = styled(Typography)`
  margin-top: 15px !important;

  @media (max-width: 768px) {
    font-size: 14px !important;
    line-height: 24px !important;
  }
`
