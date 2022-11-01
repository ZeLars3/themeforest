import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { STATISTIC_AMOUNT } from '@/constants/statisticAmount'

import {
  AboutUsStatisticContainer,
  AboutUsStatisticWrapper,
  AboutUsStatisticTitle,
  AboutUsStatisticList,
  AboutUsStatisticItem,
  ItemCount,
  ItemName,
} from './styled'

export const AboutUsStatistic: FC = () => {
  return (
    <AboutUsStatisticContainer>
      <AboutUsStatisticWrapper>
        <AboutUsStatisticTitle>
          Ensome in numbers
        </AboutUsStatisticTitle>
        <AboutUsStatisticList>
          {STATISTIC_AMOUNT.map(({ title, count }) => (
            <AboutUsStatisticItem key={uuidv4()}>
              <ItemCount>{count}</ItemCount>
              <ItemName>{title}</ItemName>
            </AboutUsStatisticItem>
          ))}
        </AboutUsStatisticList>
      </AboutUsStatisticWrapper>
    </AboutUsStatisticContainer>
  )
}
