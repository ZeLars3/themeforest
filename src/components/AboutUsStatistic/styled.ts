import styled from 'styled-components'

export const AboutUsStatisticContainer = styled.section`
  padding: 100px 0 140px 0;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    padding: 50px 0 45px 0;
  }
`

export const AboutUsStatisticWrapper = styled.div`
  max-width: 1110px;
  margin: 0 auto;
`

export const AboutUsStatisticTitle = styled.h2`
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

export const AboutUsStatisticList = styled.ul`
  padding: 30px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 35px 16px 0 16px;
  }
`

export const AboutUsStatisticItem = styled.li`
  display: grid;
  list-style: none;
  border-right: 1px solid
    ${({ theme }) => theme.colors.helperBlue3};

  @media (max-width: 768px) {
    padding-bottom: 70px;
    border-right: none;

    &:last-child {
      padding-bottom: 0;
    }
  }
`

export const ItemCount = styled.span`
  padding: 0 63px;
  font-weight: 800;
  font-size: 56px;
  line-height: 112px;
  text-align: center;
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    padding-bottom: 15px;
    font-size: 50px;
    line-height: 50px;
  }
`

export const ItemName = styled.span`
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
`
