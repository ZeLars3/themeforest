import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { TEAM_ITEMS } from 'constants/teamItems'
import { SocialLinksIcon } from 'components/common/SocialLinks/styled'
import { ContactForm } from 'components/forms/ContactForm'
import { ITeamItem } from 'types'
import { MainLayout } from 'layouts/MainLayout'
import { Routes } from 'enums'

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

export const OurTeamSingle: FC = () => {
  const { pathname } = useLocation()

  const profile: ITeamItem = TEAM_ITEMS.filter(
    ({ id }) => id === pathname.split('=')[1],
  )[0]

  const { name, description, position, avatar, socials } =
    profile
  const [, userName] = name.split(' ')

  return (
    <MainLayout>
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
                    <SocialLinksIcon
                      alt={`${path}icon`}
                      src={name}
                    />
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
    </MainLayout>
  )
}
