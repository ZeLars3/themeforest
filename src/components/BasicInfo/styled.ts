import styled from 'styled-components'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

export const BasicInfoContainer = styled.section``

export const BasicInfoWrapper = styled(Box)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1110px;
  margin: 0 auto;
  padding: 73px 16px 92px 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 16px;
  }
`
export const ColorTitle = styled(Typography)<{component: string}>`
  @media (max-width: 768px) {
    font-size: 30px !important;
    line-height: 40px !important;
  }
`

export const BasicInfoTitle = styled(Typography)`
  width: 540px;

  @media (max-width: 768px) {
    width: 100% !important;
    font-size: 30px !important;
    line-height: 40px !important;
  }
`

export const BasicInfoWrapperText = styled(Paper)`
  width: 350px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const BasicInfoText = styled(Typography)`
  @media (max-width: 768px) {
    margin-top: 20px !important;
    font-size: 14px !important;
    line-height: 24px !important;
  }
`

export const BasicInfoButton = styled.button`
  position: absolute;
  bottom: -40px;
  z-index: 3;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.7s;
  outline-offset: -13px;
  outline: 1px solid ${({ theme }) => theme.colors.white};
  border: 5px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }

  @media (max-width: 768px) {
    position: absolute;
    right: 30px;
    width: 100px;
    height: 100px;
    font-size: 12px;
  }
`

export const BasicInfoImgWrapper = styled(Box)`
  @media (max-width: 768px) {
    height: auto;
    display: flex;
    justify-content: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`

export const Img = styled.img`
  max-width: 100%;
`
