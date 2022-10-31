import { FC } from 'react'

import { ITestimonialItem } from 'types'

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
          <TestimonialItemName>{name}</TestimonialItemName>
          <TestimonialItemPosition>
            {position}
          </TestimonialItemPosition>
        </TestimonialItemInfo>
      </TestimonialItemWrapper>
      <TestimonialItemText>{text}</TestimonialItemText>
    </TestimonialItemContainer>
  )
}
