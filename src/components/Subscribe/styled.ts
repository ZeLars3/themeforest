import styled from 'styled-components'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

export const SubscribeContainer = styled.section <{ background: string }>`
  padding: 80px 16px;  
  background-color: ${({ background, theme }) =>
    background === 'primary'
      ? theme.colors.primary
      : theme.colors.secondary};
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.helperBlue2};

  @media (max-width: 768px) {
    padding: 50px 16px 60px 16px;
    border-bottom: none;
  }
`

export const SubscribeWrapper = styled(Stack)`
  justify-content: space-between;
  max-width: 1110px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column !important;
    border-bottom: 1px solid
      ${({ theme }) => theme.colors.helperBlue1};
  }
`

export const SubscribeWrapperInner = styled.div`
  width: 540px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`

export const SubscribeTitle = styled(Typography)`
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 30px !important;
    line-height: 40px !important;
  }
`

export const SubscribeText = styled(Typography)`
  margin: 20px 0 !important;

  @media (max-width: 768px) {
    display: none;
  }
`
