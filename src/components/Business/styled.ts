import styled from 'styled-components'

export const BusinessContainer = styled.section`
  background: ${({ theme }) => theme.colors.white};
`

export const BusinessWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1110px;
  margin: 0 auto;
  padding: 120px 0;
`

export const BusinessTitle = styled.h1`
  font-weight: 800;
  font-size: 57px;
  line-height: 66px;
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
    color: ${({ theme }) => theme.colors.white};
    border: none;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    padding: 15px 37px;
    width: 185px;

    &:hover {
      background: ${({ theme }) => theme.colors.hover};
    }
  }
`

export const BusinessText = styled.p`
  padding-bottom: 30px;
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
`
