import styled from 'styled-components'

export const OurTeamItemContainer = styled.li`
  width: 100%;
  height: 500px;
  max-width: 400px;
  list-style: none;

  &:nth-child(3n + 2) {
    margin-top: -60px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;

    &:nth-child(3n + 2) {
      margin-top: 0;
    }

    &:nth-child(2n) {
      margin-top: -60px;
    }
  }

  @media (max-width: 450px) {
    height: 220px;
    max-width: 160px;
  }
`

export const OurTeamItemWrapper = styled.div <{ avatar: string } >`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 25px;
  border-radius: 6px;
  background-image: ${({ avatar }) => `url(${avatar})`};
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    padding: 6px 15px;
  }
`

export const OurTeamItemLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }

  @media (max-width: 768px) {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.01em;
  }
`

export const OurTeamItemPosition = styled.p`
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.grey};
  }
`

export const OurTeamItemName = styled.h3``
