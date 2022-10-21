import styled from 'styled-components'

export const PricingContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
`

export const PricingWrapper = styled.div`
  max-width: 1110px;
  margin: 0 auto;
`

export const PricingTitle = styled.h2`
  font-weight: 800;
  font-size: 38px;
  line-height: 56px;
  letter-spacing: -0.015em;
`

export const PriceList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  width: 100%;
  margin-top: 50px;
`
