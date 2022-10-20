import styled from 'styled-components'

export const BasicInfoContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
`

export const BasicInfoTitle = styled.h1`
  max-width: 540px;
  font-weight: 800;
  font-size: 46px;
  line-height: 60px;
  letter-spacing: -0.015em;
`

export const ColorTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`

export const BasicInfoWrapperText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const BasicInfoText = styled.p`
  max-width: 350px;
  font-size: 16px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.grey};
`

export const InformationButton = styled.button`
  position: absolute;
  right: 23%;
  bottom: 280px;
  z-index: 3;
  width: 120px;
  height: 120px;
  margin: 10px 0 0 10px;
  border-radius: 50%;
  outline-offset: -17px;
  cursor: pointer;
  transition: 0.7s;
  outline: 1px solid ${({ theme }) => theme.colors.white};
  border: 9px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`

export const InformationImage = styled.div`
  display: flex;
  justify-content: center;
`

export const BasicInfoWrapper = styled.div`
  padding: 75px 0;
  max-width: 1110px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export const Img = styled.img`
  max-width: 100%;
`
