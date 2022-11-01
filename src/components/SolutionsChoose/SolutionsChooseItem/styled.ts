import styled from 'styled-components'

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

export const SolutionsChooseItemTitle = styled.h3`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }
`

export const SolutionsChooseItemText = styled.p`
  margin-top: 15px;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`

export const Icon = styled(Svgr)`
  svg {
    margin-right: 10px;
  }
`
