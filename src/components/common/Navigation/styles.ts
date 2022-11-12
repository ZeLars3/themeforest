import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import List from '@mui/material/List'

export const NavigationContainer = styled(Box)`
  display: flex !important;
  max-width: 1110px;

  h2 {
    color: ${({ theme }) => theme.colors.black};
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const NavigationList = styled(List)`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 40px;
  }
`

export const NavigationListItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0 15px;
  text-decoration: none;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.grey};

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }

  @media (max-width: 768px) {
    padding: 15px 0;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: -0.015em;
    color: ${({ theme }) => theme.colors.black};
    border-top: 1px solid
      ${({ theme }) => theme.colors.grey};

    &:last-child {
      border-bottom: 1px solid
        ${({ theme }) => theme.colors.grey};
      margin-bottom: 41px;
    }

    &:first-child {
      border-top: none;
    }
  }
`
