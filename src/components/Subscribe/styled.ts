import styled from 'styled-components'

export const SubscribeContainer = styled.section<{ background: string }>`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ background, theme }) =>
    background === 'primary'
      ? theme.colors.primary
      : theme.colors.secondary};
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.helperBlue2};

  @media (max-width: 768px) {
    border-bottom: none;
  }
`

export const SubscribeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1110px;
  margin: 0 auto;
  padding: 80px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 50px 16px 60px 16px;
    border-bottom: 1px solid
      ${({ theme }) => theme.colors.helperBlue1};
  }
`

export const SubscribeWrapperInner = styled.div`
  width: 540px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`

export const SubscribeTitle = styled.h2`
  font-weight: 800;
  font-size: 38px;
  line-height: 56px;
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 30px;
    line-height: 40px;
  }
`

export const SubscribeText = styled.p`
  margin: 20px 0;

  @media (max-width: 768px) {
    display: none;
  }
`
