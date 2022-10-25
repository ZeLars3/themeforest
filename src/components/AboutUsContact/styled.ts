import styled from 'styled-components'

export const AboutUsContactContainer = styled.section`
  padding: 120px 0;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 950px) {
    padding: 60px 0;
  }
`

export const AboutUsContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1110px;
  margin: 0 auto;

  button {
    display: none;
  }

  @media (max-width: 950px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 0 16px;

    button {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 15px 0;
      border: none;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.015em;
      color: ${({ theme }) => theme.colors.white};

      &:hover {
        background: ${({theme}) => theme.colors.hover};
      }
    }
  }
`

export const AboutUsContactTitle = styled.h2`
  font-weight: 800;
  font-size: 38px;
  line-height: 56px;
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    max-width: 328px;
    font-size: 30px;
    line-height: 40px;
  }
`

export const AboutUsContactText = styled.p`
  line-height: 28px;
  letter-spacing: -0.015em;
  margin: 24px 0 80px 0;
  color: ${({ theme }) => theme.colors.grey};

  @media (max-width: 768px) {
    display: none;
  }
`

export const AboutUsContactList = styled.ul`
  margin: 40px 0 0 0;
  color: ${({ theme }) => theme.colors.grey};

  @media (max-width: 768px) {
    margin: 30px 0 0 0;
  }
`

export const AboutUsContactWrapperText = styled.div`
  max-width: 540px;

  &:first-child {
    margin: 0 auto 0 0;

    @media (max-width: 950px) {
      width: 500px;
      margin: 0 auto 30px auto;
    }
  }

  @media (max-width: 768px) {
    margin: 0;

    &:nth-child(2) {
      display: none;
    }
  }
`
