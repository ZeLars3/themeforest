import styled from 'styled-components'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import List from '@mui/material/List'

export const PriceItemContainer = styled(Stack)`
  max-width: 255px;
  height: 522px;
  padding: 35px 20px;
  border-radius: 6px;
  transition: 0.7s;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.shadows.shadowCard3};

  button {
    width: 100%;
    padding: 10px 0;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`

export const PriceItemWrapperInner = styled(Stack)`
  justify-content: space-between;
  width: 100%;
  margin: 20px 0 30px 0;

  button {
    width: 41px;
    height: 32px;
    text-transform: none;
  }
`

export const PriceItemPrice = styled(Typography)`
  font-weight: 800 !important;
  font-size: 26px !important;
  letter-spacing: -0.015em;
`

export const PriceItemAdvantages = styled(List)`
  margin: 20px 0 !important;
`

export const PriceItemAdvantageItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0 0 10px 0;
`

export const PriceItemTitle = styled(Typography)``
