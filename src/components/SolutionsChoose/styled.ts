import styled from 'styled-components'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export const SolutionsChooseContainer = styled.section`
  width: 100%;
  margin-top: 120px;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    height: auto;
    margin-top: 50px;
    background: ${({ theme }) => theme.colors.white};
  }
`

export const SolutionsChooseWrapper = styled(Stack)`
  justify-content: space-between;
  max-width: 1110px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column !important;
  }
`

export const SolutionsChooseImgWrapper = styled(Box)`
  position: relative;
  flex-grow: 1;
  width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const SolutionsChooseImg = styled.img`
  position: absolute;
  right: 0;
  width: 923px;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
  }
`

export const SolutionsChooseMain = styled(Box)`
  flex-grow: 1;
  width: 500px;
  padding: 118px 0 90px 50px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px;
    margin-top: 34px;
  }
`

export const SolutionsChooseTitle = styled(Typography)`
  @media (max-width: 768px) {
    font-size: 30px !important;
    line-height: 40px !important;
  }
`

export const SolutionsChooseList = styled.ul`
  padding-top: 50px;

  @media (max-width: 768px) {
    padding-top: 30px;
  }
`
