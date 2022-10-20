import styled from 'styled-components'

export const BenefitsContainer = styled.section`
  background-color: ${({ theme }) =>
    theme.colors.background};
  padding: 120px 0;
`

export const BenefitsWrapper = styled.div`
  max-width: 1110px;
  display: flex;
  margin: 0 auto;
`

export const BenefitsTitle = styled.h2`
  padding-bottom: 30px;
  font-weight: 800;
  font-size: 38px;
  line-height: 56px;
  letter-spacing: -0.015em;
`

export const BenefitsText = styled.p`
  font-size: 20px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
`

export const TextWrapper = styled.div`
  display: grid;
  align-self: center;
  max-width: 540px;
`

export const BenefitsList = styled.ul`
  display: flex;
`

export const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  &:first-child {
    margin: 0 30px;
  }

  &:last-child {
    padding-top: 56px;
  }
`
