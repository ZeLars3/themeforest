import styled from 'styled-components'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

export const OutTeamHeadContainer = styled.section`
  padding: 40px 16px 90px 16px;
  background: ${({ theme }) => theme.colors.secondary};

  @media (max-width: 768px) {
    padding: 10px 0 0 0;
  }
`

export const OutTeamHeadWrapper = styled(Box)`
  max-width: 1110px;
  margin: 0 auto;
`

export const OutTeamHeadWrapperText = styled(Stack)`
  margin-top: 135px;

  @media (max-width: 768px) {
    flex-direction: column !important;
    margin-top: 57px;
    background: ${({ theme }) => theme.colors.white};
  }
`

export const OutTeamHeadItem = styled(Box)`
  padding-bottom: 35px;
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};
`

export const OutTeamHeadTitle = styled(Typography)`
  color: ${({ theme }) => theme.colors.white} !important;

  @media (max-width: 768px) {
    padding: 0 16px;
    font-size: 30px !important;
    line-height: 40px !important;
  }
`

export const OutTeamHeadSubtitle = styled(Typography)`
  max-width: 540px;
  color: ${({ theme }) =>
    theme.colors.background} !important;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 50px 16px 40px 16px;
    color: ${({ theme }) => theme.colors.grey} !important;
  }
`
