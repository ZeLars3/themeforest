import styled from 'styled-components'

export const StatisticContainer = styled.section`
  background: ${({ theme }) => theme.colors.white};
`

export const StatisticWrapper = styled.div`
  padding: 120px 0 80px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1110px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 50px 16px;
  }
`

export const StatisticTitle = styled.h1`
  font-weight: 800;
  font-size: 38px;
  line-height: 56px;
  text-align: center;
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 40px;
  }
`

export const StatisticAmounts = styled.ul`
  display: flex;
`

export const StatisticAmountItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 31px;
  max-width: 156px;

  &:last-child {
    margin-right: 61px;
  }

  @media (max-width: 768px) {
    &:last-child {
      margin-right: 0;
    }
  }
`

export const ItemName = styled.span`
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
`

export const StatisticWrapperInner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 0;
  }
`

export const StatisticText = styled.p`
  max-width: 540px;
  font-size: 20px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 14px;
    line-height: 24px;
  }
`

export const CompanyIcon = styled.img<any>`
  max-width: 185px;
  max-height: 132px;
  background-image: ${({ icon }) => icon};

  @media (max-width: 768px) {
    max-width: 92px;
    max-height: 65px;
  }
`

export const ItemCount = styled.span`
  font-weight: 800;
  font-size: 50px;
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 70px;
  }
`

export const StatisticCompanies = styled.ul`
  @media (max-width: 768px) {
    display: flex;
  }
`