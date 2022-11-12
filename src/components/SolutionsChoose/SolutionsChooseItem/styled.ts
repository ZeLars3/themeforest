import styled from 'styled-components'
import Typography from '@mui/material/Typography'

import { Svgr } from '@/components/common'

export const SolutionsChooseItemWrapper = styled.li`
  padding-bottom: 30px;
  list-style: none;

  @media (max-width: 360px) {
    &:last-child {
      padding-bottom: 0;
    }
  }
`

export const SolutionsChooseItemTitle = styled(Typography)`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 20px !important;
    line-height: 30px !important;
  }
`

export const SolutionsChooseItemText = styled(Typography)`
  margin-top: 15px !important;

  @media (max-width: 768px) {
    margin-top: 10px !important;
  }
`

export const Icon = styled(Svgr)`
  svg {
    margin-right: 10px;
  }
`
