import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

import {
  STATISTIC_AMOUNT,
  STATISTIC_COMPANY_ICONS,
} from 'constants/index'

import {
  StatisticWrapperInner,
  StatisticAmountItem,
  StatisticCompanies,
  StatisticContainer,
  StatisticAmounts,
  StatisticTitle,
  StatisticText,
  CompanyIcon,
  ItemCount,
  ItemName,
  StatisticWrapper,
} from './styled'

export const SuccessStatistic: FC = () => {
  return (
    <StatisticContainer>
      <StatisticWrapper>
        <StatisticTitle>
          We provide services that guarantee your success
        </StatisticTitle>
        <StatisticWrapperInner>
          <StatisticAmounts>
            {STATISTIC_AMOUNT.slice(0, 3).map(
              ({ title, count }) => (
                <StatisticAmountItem key={uuidv4()}>
                  <ItemCount>{count}</ItemCount>
                  <ItemName>{title}</ItemName>
                </StatisticAmountItem>
              ),
            )}
          </StatisticAmounts>
          <StatisticText>
            Sed ut perspiciatis unde omnis iste natus error
            sit voluptat accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quaeab illo
            inventore. Donec tincidunt tempor quam, non
            mollis quam finibus nec.
          </StatisticText>
        </StatisticWrapperInner>
        <StatisticCompanies>
          {STATISTIC_COMPANY_ICONS.map((icon) => (
            <CompanyIcon key={uuidv4()} src={icon} />
          ))}
        </StatisticCompanies>
      </StatisticWrapper>
    </StatisticContainer>
  )
}
