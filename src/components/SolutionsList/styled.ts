import styled from 'styled-components'

export const SolutionsListContainer = styled.section`
  background${({ theme }) => theme.shadows.shadowCard3};
`

export const SolutionsListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1110px;
  gap: 40px 30px;
  list-style: none;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    ${({ theme }) => theme.shadows.shadowCard3};
  }
`
