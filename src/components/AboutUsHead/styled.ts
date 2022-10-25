import styled from 'styled-components'

export const AboutUsHeadContainer = styled.section`
  background: ${({ theme }) => theme.colors.background};
  padding: 60px 0 160px 0;

  @media (max-width: 768px) {
    padding: 35px 0 60px 0;
  }
`

export const AboutUsHeadWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`

export const AboutUsHeadTitle = styled.h1`
  padding-bottom: 20px;
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

export const AboutUsHeadPath = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
`

export const AboutUsHeadLink = styled.a`
  color: ${({ theme }) => theme.colors.grey};
  text-decoration: none;
`
