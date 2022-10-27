import styled from 'styled-components'

export const OurTeamSingleContainer = styled.div`
  padding: 80px 0 120px 0;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 1000px) {
    padding: 35px 0 0px 0;
  }
`

export const OurTeamSingleHead = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 120px;

  @media (max-width: 768px) {
    padding-bottom: 60px;
  }
`

export const OurTeamSinglePath = styled.div`
  text-align: center;
  padding-top: 7px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
`

export const OurTeamSingleLink = styled.a`
  color: ${({ theme }) => theme.colors.grey};
  text-decoration: none;
`

export const OurTeamSingleMain = styled.div`
  display: flex;
  justify-content: center;
  gap: 140px;
  margin: 0 auto;
  padding: 50px 0;
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: 1000px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 50px 16px 0 16px;
  }
`

export const OurTeamSingleWrapper = styled.div`
  max-width: 540px;

  @media (max-width: 768px) {
    &:first-child {
      margin: 0 auto;
    }
  }
`

export const OurTeamSinglTitle = styled.h1`
  text-align: center;
  font-weight: 800;
  font-size: 46px;
  line-height: 60px;
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 40px;
  }
`

export const OurTeamSingleAvatar = styled.div<{ avatar: string }>`
  width: 328px;
  height: 250px;
  margin-bottom: 30px;
  background-image: ${({ avatar }) => `url(${avatar})`};
  background-size: cover;
  background-position: center;
  border-radius: 6px;
`

export const OurTeamSingleFormWrapper = styled.div`
  width: 400px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 20px 0 0 0;

    button {
      width: 100%;
    }
  }
`

export const OurTeamSingleInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

export const ProfileSocials = styled.ul`
  padding-top: 8px;
`


export const Link = styled.a`
  margin-right: 13px;
`

export const SpanTitle = styled.span`
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.primary};
`

export const SpanSubtitle = styled.span`
  @media (max-width: 768px) {
   max-width: 328px;
  }
`
export const Icon = styled.img``
export const OurTeamSingleInfo = styled.div``
