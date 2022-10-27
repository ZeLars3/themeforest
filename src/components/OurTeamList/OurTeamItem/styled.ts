import styled from 'styled-components'

export const OurTeamItemContainer = styled.li<{ avatar: string, isMargin?: boolean }>`
  width: 350px;
  height: 500px;
  list-style: none;
  margin: -${({ isMargin }) => isMargin && '60px 0 30px 0'};

  &::before {
    content: '';
    position: absolute;
    width: 350px;
    height: 500px;
    background-image: ${({ avatar }) => `url(${avatar})`};
    background-size: cover;
    background-position: center;
    border-radius: 6px;
  }

  @media (max-width: 950px) {
    width: 160px;
    height: 220px;
    background-size: 160px 220px;
    margin: 0 auto;
    background-position: 0 0;
    background-repeat: no-repeat;

    &:nth-child(2n) {
      margin-top: -60px;
    }

    &::before {
      width: 160px;
      height: 220px;
    }
  }
`

export const OurTeamItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 25px;
  background: linear-gradient(180deg, rgba(40, 50, 66, 0) 43.61%, #283242 100.37%);
  border-radius: 6px;

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
