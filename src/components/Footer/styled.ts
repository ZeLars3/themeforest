import styled from 'styled-components'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'

import { Svgr } from '../common'

export const FooterContainer = styled.footer`
  padding: 50px 16px 40px 16px;
  background-color: ${({ theme }) =>
    theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    padding: 40px 16px 20px 16px;
  }
`

export const FooterWrapper = styled(Stack)`
  justify-content: space-between;
  max-width: 1110px;
  margin: 0 auto;

  &:first-child {
    padding-bottom: 38px;
    border-bottom: 1px solid
      ${({ theme }) => theme.colors.helperBlue2};
  }

  &:last-child {
    padding: 34px 0 30px 0;
  }

  @media (max-width: 768px) {
    flex-direction: column !important;
  }
`

export const InfoContainer = styled(Stack)`
  @media (max-width: 768px) {
    padding-bottom: 11px;
  }
`

export const LogoStyled = styled.img`
  width: 141px;
  height: 46px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 90px;
    height: 30px;
  }
`

export const HeadingText = styled(Typography)`
  margin-bottom: 31px !important;
  color: ${({ theme }) => theme.colors.white} !important;

  @media (max-width: 768px) {
    padding-bottom: 15px !important;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid
      ${({ theme }) => theme.colors.helperBlue2};
  }
`

export const FooterText = styled(Typography)`
  margin: 20px 0 !important;
  max-width: 285px;
  color: ${({ theme }) => theme.colors.white} !important;

  @media (max-width: 768px) {
    display: none;
  }
`

export const LinkWrapper = styled.li`
  margin: 12px 0;
  max-width: 235px;
  color: ${({ theme }) => theme.colors.grey};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.grey};

    &:hover {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }
`

export const RightsContainer = styled(Stack)`
  max-width: 1110px;
  padding-top: 35px;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding-top: 10px;
  }
`

export const Text = styled.p<any>`
  color: ${({ theme }) => theme.colors.helperBlue2};

  &:first-child {
    margin-right: 95px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 150%;
    color: ${({ theme, $color }) =>
      $color ? theme.colors.white : null};
  }
`

export const Icon = styled(Svgr)`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

export const FooterList = styled(List)`
  padding: 0 !important;
`

export const WrapperText = styled.div``
export const TextWrapper = styled(Stack)``
