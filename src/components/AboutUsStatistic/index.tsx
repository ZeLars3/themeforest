import { FC, useId } from 'react'

import { STATISTIC_AMOUNT } from 'constants/statisticAmount'

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
            <AboutUsStatisticItem key={useId()}>
              <ItemCount>{count}</ItemCount>
              <ItemName>{title}</ItemName>
            </AboutUsStatisticItem>
          ))}
        </AboutUsStatisticList>
      </AboutUsStatisticWrapper>
    </AboutUsStatisticContainer>
  )
}
