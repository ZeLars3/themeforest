import { FC } from 'react'

import { Routes } from 'enums'
import { ITestimonialItem } from 'types'

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
    <AboutUsSayItemLink href={Routes.Blog}>
      <AboutUsSayItemWrapper>
        <AboutUsSayItemAvatar
          src={avatar}
          alt="Person avatar"
        />
        <AboutUsSayItemText>{text}</AboutUsSayItemText>
        <>
          <AboutUsSayItemName>{name}</AboutUsSayItemName>
          <AboutUsSayItemPosition>
            {position}
          </AboutUsSayItemPosition>
        </>
      </AboutUsSayItemWrapper>
    </AboutUsSayItemLink>
  )
}
