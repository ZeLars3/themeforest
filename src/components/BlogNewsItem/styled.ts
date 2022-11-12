import styled from 'styled-components'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

export const BlogNewsItemContainer = styled.li`
  max-width: 1110px;
  margin: 0 auto;
  display: flex;
  border-radius: 6px;
  margin-bottom: 30px;
  transition: 0.7s;
  border: 1px solid
    ${({ theme }) => theme.colors.helperBlue3};
  ${({ theme }) => theme.shadows.shadowCard3};

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    transform: translateX(40px);
    transition: 0.7s;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.tertiary};
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const BlogNewsItemTitle = styled(Typography)`
  letter-spacing: -0.015px;

  @media (max-width: 768px) {
    font-size: 20px !important;
    line-height: 30px !important;
  }
`

export const BlogNewsItemInfo = styled(Stack)`
  align-self: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 20px;
`

export const BlogNewsItemImg = styled.img`
  @media (max-width: 768px) {
    width: 320px;
    height: 160px;
    margin: 0 auto;
  }
`

export const BlogNewsItemText = styled(Typography)``
