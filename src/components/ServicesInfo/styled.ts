import styled from 'styled-components'

export const ServicesInfoContainer = styled.section`
  padding: 100px 0 20px 0;

  @media (max-width: 768px) {
    padding: 74px 0 20px 0;
  }
`

export const ServicesInfoWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1110px;
  flex-direction: column;
`

export const ServicesInfoWrapperHead = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  letter-spacing: -0.015em;
  text-align: center;
  padding-bottom: 120px;

  @media (max-width: 768px) {
    padding-bottom: 50px;
  }
`

export const ServicesInfoText = styled.h4`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.primary};
`

export const ServicesInfoTitle = styled.h1`
  font-weight: 800;
  font-size: 46px;
  line-height: 60px;
  padding: 15px 0;

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 40px;
  }
`

export const ServicesInfoSubtitle = styled.p`
  max-width: 730px;
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  color: ${({ theme }) => theme.colors.grey};

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
`

export const ServicesInfoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
