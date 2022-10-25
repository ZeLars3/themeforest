import styled from 'styled-components'

export const AboutUsCustomersContainer = styled.section`
  padding: 120px 0;
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    padding: 50px 0;
  }
`

export const AboutUsCustomersWrapper = styled.div`
  max-width: 1110px;
  margin: 0 auto;
`

export const AboutUsCustomersTitle = styled.h2`
  font-weight: 800;
  font-size: 46px;
  line-height: 60px;
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 30px;
    line-height: 40px;
  }
`

export const AboutUsCustomersSubtitle = styled.p`
  margin: 30px 0;
  max-width: 445px;
  font-size: 20px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};

  @media (max-width: 768px) {
    text-align: center;
    margin: 20px 0 14px 0;
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

export const AboutUsCustomersWrapperText = styled.div`
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`
export const AboutUsCustomersList = styled.ul``
