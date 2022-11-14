import styled from 'styled-components'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export const HelpContainer = styled.section`
  background-color: ${({ theme }) =>
    theme.colors.background};
`

export const HelpWrapper = styled(Box)`
  padding: 100px 0;
  max-width: 540px;
  margin: 0 auto;
  text-align: center;

  button {
    margin: 0 auto;
    padding: 15px 35px;
    width: 190px;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    padding: 50px 16px;

    button {
      width: 100%;
    }
  }
`

export const HelpTitle = styled(Typography)`
  @media (max-width: 768px) {
    font-size: 30px !important;
    line-height: 40px !important;
  }
`

export const HelpText = styled(Typography)`
  padding: 30px 0;

  @media (max-width: 768px) {
    padding: 20px 0 30px 0;
  }
`
