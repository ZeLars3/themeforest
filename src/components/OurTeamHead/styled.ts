import styled from 'styled-components'

export const OutTeamHeadContainer = styled.section`
  padding: 40px 0 90px 0;
  background: ${({ theme }) => theme.colors.secondary};

  @media (max-width: 768px) {
    padding: 0;
  }
`

export const OutTeamHeadWrapper = styled.div`
  max-width: 1110px;
  margin: 0 auto;
`

export const OutTeamHeadWrapperText = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    background: ${({ theme }) => theme.colors.white};
  }
`

export const OutTeamHeadPath = styled.div`
  padding: 20px 0 129px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    padding: 10px 16px 57px 16px;
  }
`

export const OutTeamHeadLink = styled.a`
  color: ${({ theme }) => theme.colors.grey};
  text-decoration: none;
`

export const OutTeamHeadItem = styled.div`
  padding-bottom: 35px;
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};
`

export const OutTeamHeadTitle = styled.h2`
  font-weight: 800;
  font-size: 46px;
  line-height: 60px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    padding: 0 16px;
    font-size: 30px;
    line-height: 40px;
  }
`

export const OutTeamHeadSubtitle = styled.p`
  max-width: 530px;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    padding: 50px 16px 40px 16px;
    color: ${({ theme }) => theme.colors.grey};
  }
`
