import { FC } from 'react'

import { ITestimonialItem } from '@/types'

import {
  TestimonialItemContainer,
  TestimonialItemAvatar,
  TestimonialItemInfo,
  TestimonialItemName,
  TestimonialItemPosition,
  TestimonialItemText,
  TestimonialItemWrapper,
  Icon,
} from './styled'

export const TestimonialItem: FC<ITestimonialItem> = ({
  name,
  position,
  avatar,
  text,
}) => {
  return (
    <TestimonialItemContainer>
      <TestimonialItemWrapper>
        <TestimonialItemAvatar>
          <Icon src={avatar} alt="Person avatar" />
        </TestimonialItemAvatar>
        <TestimonialItemInfo>
          <TestimonialItemName variant="h6">
            {name}
          </TestimonialItemName>
          <TestimonialItemPosition variant="subtitle2">
            {position}
          </TestimonialItemPosition>
        </TestimonialItemInfo>
      </TestimonialItemWrapper>
      <TestimonialItemText variant="body1">
        {text}
      </TestimonialItemText>
    </TestimonialItemContainer>
  )
}
