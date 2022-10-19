import styled from 'styled-components'

export const SubscribeWrapper = styled.section`
  color: white;
  background-color: ${({ theme }) =>
    theme.colors.secondary};
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.helperBlue2};
`

export const SubscribeContainer = styled.div`
  display: flex;
  max-width: 1110px;
  margin: 0 auto;
  padding: 80px 0;
  justify-content: space-between;
`

export const SubscribeWrapperInner = styled.div`
  width: 540px;
`

export const SubscribeTitle = styled.h2`
  margin-bottom: 24px;
  letter-spacing: -0.015em;
  font-weight: 800;
  font-size: 36px;
  line-height: 56px;
`

export const SubscribeText = styled.p`
  font-size: 20px;
  line-height: 33px;
`
