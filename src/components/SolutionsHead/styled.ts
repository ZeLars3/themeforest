import styled from 'styled-components'

export const SolutionsHeadContainer = styled.section`
  padding-bottom: 120px;

  @media (max-width: 768px) {
    padding-bottom: 50px;
  }
`

export const SolutionsHeadWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1110px;
  text-align: center;
  flex-direction: column;
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`

export const SolutionsHeadText = styled.h4`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.primary};
`

export const SolutionsHeadTitle = styled.h1`
  font-weight: 800;
  font-size: 46px;
  line-height: 60px;
  padding: 15px 0;

  @media (max-width: 768px) {
    padding: 12px 0;
    font-size: 30px;
    line-height: 40px;
  }
`

export const SolutionsHeadPath = styled.div`
  text-align: left;
  padding: 20px 0 56px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    padding: 20px 0 40px 0;
  }
`

export const SolutionsHeadLink = styled.a`
text-decoration: none;
color: ${({ theme }) => theme.colors.grey};
`

export const SolutionsHeadSubtitle = styled.p`
  margin: 0 auto;
  max-width: 540px;
  font-size: 20px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
`
