import styled from 'styled-components'

export const AboutUsInfoContainer = styled.section`
  background: ${({ theme }) => theme.colors.white};
  padding: 120px 0;

  @media (max-width: 768px) {
    padding: 50px 0 0 0;
  }
`

export const AboutUsInfoWrapper = styled.div`
  max-width: 1110px;
  margin: 0 auto;
`

export const AboutUsInfoItem = styled.div`
  display: flex;
  flex-direction: row;

  &:first-child {
    margin-bottom: 134px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    &:first-child {
      margin-bottom: 50px;
    }

    &:last-child {
      flex-direction: column-reverse;
    }
  }
`

export const AboutUsInfoTitle = styled.h2`
  padding-bottom: 30px;
  font-weight: 800;
  font-size: 46px;
  line-height: 60px;
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    padding-bottom: 20px;
    font-size: 30px;
    line-height: 40px;
  }
`

export const AboutUsInfoText = styled.p`
  font-size: 20px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
`

export const AboutUsInfoImg = styled.img`
  max-height: 453px;

  &:first-child {
    margin-right: 30px;
  }

  &:last-child {
    margin-left: 30px;
  }

  @media (max-width: 768px) {
    padding-top: 30px;

    &:first-child {
      margin-right: 0;
    }

    &:last-child {
      margin-left: 0;
    }
  }
`

export const AboutUsInfoWrapperText = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`
