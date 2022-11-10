import styled from 'styled-components'

export const OurTeamListContainer = styled.div`
  padding: 120px 0 50px 0;

  @media (max-width: 950px) {
    padding: 0 0 50px 0;
  }
`

export const OurTeamListWrapper = styled.ul<any>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  max-width: 1110px;
  padding: 70px 0;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    grid-gap: 8px;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 16px;
    margin: 60px auto 0 auto;
  }
`
