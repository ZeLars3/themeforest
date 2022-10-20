import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { BENEFIT_ITEMS } from 'constants/index'

import { BenefitItem } from './BenefitItem'
import {
  BenefitsContainer,
  BenefitsList,
  BenefitsText,
  BenefitsTitle,
  BenefitsWrapper,
  GroupWrapper,
  TextWrapper,
} from './styled'

export const Benefits: FC = () => {
  return (
    <BenefitsContainer>
      <BenefitsWrapper>
        <TextWrapper>
          <BenefitsTitle>
            The benefits of Ensome
          </BenefitsTitle>
          <BenefitsText>
            Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </BenefitsText>
        </TextWrapper>
        <BenefitsList>
          <GroupWrapper>
            {BENEFIT_ITEMS.slice(0, 2).map(
              ({ title, text, icon }) => (
                <BenefitItem
                  key={uuidv4()}
                  title={title}
                  text={text}
                  icon={icon}
                />
              ),
            )}
          </GroupWrapper>
          <GroupWrapper>
            {BENEFIT_ITEMS.slice(2, 4).map(
              ({ title, text, icon }) => (
                <BenefitItem
                  key={uuidv4()}
                  title={title}
                  text={text}
                  icon={icon}
                />
              ),
            )}
          </GroupWrapper>
        </BenefitsList>
      </BenefitsWrapper>
    </BenefitsContainer>
  )
}
