import styled from 'styled-components'

export const SolutionSingleArticleWrapper = styled.div`
  padding-bottom: 70px;

  @media (max-width: 768px) {
    padding-bottom: 30px;
  }
`

export const SolutionSingleArticleTitle = styled.h2`
  padding-bottom: 30px;
  font-weight: 800;
  font-size: 38px;
  line-height: 56px;
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    padding-bottom: 20px;
    padding-top: 10px;
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
  }
`

export const Img = styled.img`
  width: 635px;
  height: 250px;
  padding: 0 0 30px 0;

  @media (max-width: 768px) {
    display: flex;
    margin: 0 auto;
    padding: 10px 0 20px 0;
    width: 328px;
    height: auto;
  }
`

export const SolutionContentText = styled.p`
  font-size: 20px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
`

export const SolutionSingleArticleList = styled.ul`
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`

export const SolutionSingleArticleItem = styled.li`
  margin-bottom: 25px;
  list-style: inside;
  margin-bottom: 10px;
  font-size: 20px;
  line-height: 33px;
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 24px;
  }
`

export const ItemDescription = styled.span`
  color: ${({ theme }) => theme.colors.grey};
`

export const ItemDefenition = styled.span``
