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
        <AboutUsStatisticTitle variant="h1">
          Ensome in numbers
        </AboutUsStatisticTitle>
        <AboutUsStatisticList>
          {STATISTIC_AMOUNT.map(({ title, count }) => (
            <AboutUsStatisticItem key={uuidv4()}>
              <ItemCount>{count}</ItemCount>
              <ItemName component="span" variant="body1">
                {title}
              </ItemName>
            </AboutUsStatisticItem>
          ))}
        </AboutUsStatisticList>
      </AboutUsStatisticWrapper>
    </AboutUsStatisticContainer>
  )
}
