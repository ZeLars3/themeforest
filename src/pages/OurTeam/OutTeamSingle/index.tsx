import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { TEAM_ITEMS } from '@/constants/teamItems'
import { Svgr } from '@/components/common'
import { ContactForm } from '@/components/forms/ContactForm'
import { ITeamItem } from '@/types'
import { Routes } from '@/enums'

import {
  OurTeamSingleInfoItem,
  OurTeamSingleInfo,
  OurTeamSingleAvatar,
  OurTeamSingleMain,
  OurTeamSingleHead,
  ProfileSocials,
  OurTeamSinglTitle,
  OurTeamSingleContainer,
  OurTeamSingleFormWrapper,
  OurTeamSingleWrapper,
  SpanSubtitle,
  SpanTitle,
  OurTeamSingleLink,
  OurTeamSinglePath,
  Link,
} from './styled'

const OurTeamSingle: FC = () => {
  const { pathname } = useLocation()

  const profile: ITeamItem = TEAM_ITEMS.filter(
    ({ id }) => id === pathname.split('=')[1],
  )[0]

  const { name, description, position, avatar, socials } =
    profile
  const [, userName] = name.split(' ')

  return (
    <OurTeamSingleContainer>
      <OurTeamSingleHead>
        <OurTeamSinglTitle>{name}</OurTeamSinglTitle>
        <OurTeamSinglePath>
          <OurTeamSingleLink href={Routes.OurTeam}>
            Home | Our Team
          </OurTeamSingleLink>{' '}
          | {name}
        </OurTeamSinglePath>
      </OurTeamSingleHead>
      <OurTeamSingleMain>
        <OurTeamSingleWrapper>
          <OurTeamSingleAvatar avatar={avatar} />
          <OurTeamSingleInfo>
            <OurTeamSingleInfoItem>
              <SpanTitle>Name</SpanTitle>
              <SpanSubtitle>{name}</SpanSubtitle>
            </OurTeamSingleInfoItem>
            <OurTeamSingleInfoItem>
              <SpanTitle>Position</SpanTitle>
              <SpanSubtitle>{position}</SpanSubtitle>
            </OurTeamSingleInfoItem>
            <OurTeamSingleInfoItem>
              <SpanTitle>Description</SpanTitle>
              <SpanSubtitle>{description}</SpanSubtitle>
            </OurTeamSingleInfoItem>
            <SpanTitle>Social networks</SpanTitle>
            <ProfileSocials>
              {socials.map(({ name, path }) => (
                <Link href={path} key={uuidv4()}>
                  <Svgr icon={name} />
                </Link>
              ))}
            </ProfileSocials>
          </OurTeamSingleInfo>
        </OurTeamSingleWrapper>
        <OurTeamSingleFormWrapper>
          <ContactForm
            title={`Want ${userName} to share his expertise with you?`}
            titleSize="big"
          />
        </OurTeamSingleFormWrapper>
      </OurTeamSingleMain>
    </OurTeamSingleContainer>
  )
}

export default OurTeamSingle