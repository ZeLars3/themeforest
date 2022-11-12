import styled from 'styled-components'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export const SolutionContainer = styled.section`
  background-color: ${({ theme }) =>
    theme.colors.background};
`

export const SolutionWrapper = styled(Stack)`
  align-items: center;

  @media (max-width: 768px) {
    padding: 40px 0 50px 0;
    flex-direction: column !important;
  }
`

export const Image = styled.img`
  width: 100%;
  max-width: 750px;
`

export const WrapperInner = styled(Stack)`
  width: 540px;
  margin: 0 0 0 46px;

  button {
    font-weight: 700;
    padding: 15px 35px;
    width: 190px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
    width: 100%;
    margin: 20px 0 0 0;

    button {
      width: 100%;
    }
  }
`

export const SolutionTitle = styled(Typography)`
  width: 450px;

  @media (max-width: 768px) {
    width: 100% !important;
    font-size: 30px !important;
    line-height: 40px !important;
  }
`

export const SolutionText = styled(Typography)`
  padding: 20px 0;

  @media (max-width: 768px) {
    font-size: 14px !important;
    line-height: 24px !important;
  }
`

export const WrapperImage = styled(Box)``
