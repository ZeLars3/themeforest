import styled from 'styled-components'

export const BusinessContainer = styled.section`
  padding: 120px 0;

  @media (max-width: 768px) {
    padding: 50px 0;
  }
`

export const BusinessWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1110px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 16px;
  }
`

export const BusinessTitle = styled.h1`
  font-weight: 800;
  font-size: 57px;
  line-height: 66px;
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 40px;
  }
`

export const ColorTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`

export const BusinessWrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 540px;
  padding-left: 30px;

  button {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    padding: 15px 35px;
    width: 190px;
  }

  @media (max-width: 768px) {
    padding: 20px 0 0 0;
    max-width: auto;

    button {
      width: 100%;
    }
  }
`

export const BusinessText = styled.p`
  padding-bottom: 30px;
  font-size: 20px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
`
