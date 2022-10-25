import styled from 'styled-components'

export const AboutUsSayItemLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey};
`

export const AboutUsSayItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  padding: 35px;
  border-radius: 6px;
  ${({ theme }) => theme.shadows.shadowCard3};

  @media (max-width: 768px) {
    margin: 20px auto 0 auto;
    max-width: 272px;
    padding: 25px;
  }
`

export const AboutUsSayItemAvatar = styled.img`
  position: absolute;
  z-index: 1;
  top: -20px;
  width: 80px;
  height: 80px;
  overflow: hidden;

  @media (max-width: 768px) {
    top: -10px;
    width: 60px;
    height: 60px;
  }
`

export const AboutUsSayItemName = styled.h3`
  padding-bottom: 4px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`

export const AboutUsSayItemPosition = styled.p`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    font-weight: 500;
  }
`

export const AboutUsSayItemText = styled.p`
  margin: 35px 0;

  @media (max-width: 768px) {
    margin: 30px 0 20px 0;
    font-size: 14px;
    line-height: 24px;
  }
`
