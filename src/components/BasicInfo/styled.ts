import styled from 'styled-components'

export const BasicInfoContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
`

export const BasicInfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1110px;
  min-width: 360px;
  margin: 0 auto;
  padding: 73px 0 92px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 16px;
  }
`
export const ColorTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`

export const BasicInfoTitle = styled.h1`
  max-width: 540px;
  font-weight: 800;
  font-size: 46px;
  line-height: 60px;
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 40px;
  }
`

export const BasicInfoWrapperText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const BasicInfoText = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 14px;
    line-height: 24px;
  }
`

export const BasicInfoButton = styled.button`
  position: absolute;
  bottom: -40px;
  z-index: 3;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.7s;
  outline-offset: -13px;
  outline: 1px solid ${({ theme }) => theme.colors.white};
  border: 5px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    position: absolute;
    right: 30px;
    width: 100px;
    height: 100px;
    font-size: 12px;
  }
`

export const BasicInfoImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 590px;

  @media (max-width: 768px) {
    height: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`

export const Img = styled.img``
