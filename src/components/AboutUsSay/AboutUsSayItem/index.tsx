import { FC } from 'react'

import { Routes } from '@/enums'
import { ITestimonialItem } from '@/types'

import {
  AboutUsSayItemAvatar,
  AboutUsSayItemWrapper,
  AboutUsSayItemName,
  AboutUsSayItemPosition,
  AboutUsSayItemText,
  AboutUsSayItemLink,
} from './styled'

export const AboutUsSayItem: FC<ITestimonialItem> = ({
  name,
  position,
  avatar,
  text,
}) => {
  return (
    <AboutUsSayItemLink variant="body1" href={Routes.Blog}>
      <AboutUsSayItemWrapper>
        <AboutUsSayItemAvatar
          src={avatar}
          alt="Person avatar"
        />
        <AboutUsSayItemText variant="body1">
          {text}
        </AboutUsSayItemText>
        <AboutUsSayItemName variant="h6">
          {name}
        </AboutUsSayItemName>
        <AboutUsSayItemPosition variant="subtitle2">
          {position}
        </AboutUsSayItemPosition>
      </AboutUsSayItemWrapper>
    </AboutUsSayItemLink>
  )
}
