import styled from 'styled-components'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

export const OurTeamItemContainer = styled.li`
  width: 100%;
  height: 500px;
  max-width: 400px;
  list-style: none;

  &:nth-child(3n + 2) {
    margin-top: -60px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;

    &:nth-child(3n + 2) {
      margin-top: 0;
    }

    &:nth-child(2n) {
      margin-top: -60px;
    }
  }

  @media (max-width: 450px) {
    height: 220px;
    max-width: 160px;
  }
`

export const OurTeamItemWrapper = styled(Stack)<{ avatar: string }>`
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 25px;
  border-radius: 6px;
  background-image: ${({ avatar }) => `url(${avatar})`};
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    padding: 6px 15px;
  }
`

export const OurTeamItemLink = styled(Link)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white} !important;

  &:hover {
    color: ${({ theme }) => theme.colors.hover} !important;
  }

  @media (max-width: 768px) {
    font-weight: 600 !important;
    font-size: 14px !important;
    line-height: 24px !important;
    letter-spacing: -0.01em !important;
  }
`

export const OurTeamItemPosition = styled(Typography)`
  color: ${({ theme }) => theme.colors.white} !important;

  @media (max-width: 768px) {
    font-size: 14px !important;
    line-height: 24px !important;
    color: ${({ theme }) => theme.colors.grey} !important;
  }
`
