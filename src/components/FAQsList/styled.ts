import styled from 'styled-components'

export const FAQsListContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 0 0 120px 0;

  @media (max-width: 768px) {
    padding: 0 16px 50px 16px;
  }
`

export const FAQsListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1110px;
`
