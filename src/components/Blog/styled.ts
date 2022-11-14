import styled from 'styled-components'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

export const BlogContainer = styled.section`
  padding: 70px 16px;

  @media (max-width: 768px) {
    padding: 50px 16px;
  }
`

export const BlogWrapper = styled(Box)`
  max-width: 1110px;
  margin: 20px auto;
`

export const ButtonWrapper = styled(Box)`
  @media (max-width: 768px) {
    button {
      padding: 15px 37px;
      width: 100%;
    }
  }
`

export const BlogList = styled(Stack)`
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column !important;
    margin: 0 auto;
    padding: 16px 0 36px 0;
  }
`

export const BlogWrapperText = styled(Stack)`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;

  @media (max-width: 768px) {
    margin: 0;
  }
`

export const BlogTitle = styled(Typography)`
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    font-size: 30px !important;
    line-height: 40px !important;
  }
`

export const BlogController = styled(Box)`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Icon = styled.img``
