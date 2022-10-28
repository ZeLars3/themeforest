import styled from 'styled-components'

export const SolutionSingleMainWrapper = styled.section`
  max-width: 1110px;
  margin: 0 auto;
  padding: 120px 0;
  display: flex;
`

export const SolutionSingleMainSidebar = styled.ul`
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: -3;
  top: 0;
  width: 320px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: 950px) {
    position: fixed;
    top: 0;
    flex-direction: row;
    width: 100%;
    height: 5px;
    margin-bottom: 40px;
  }
`

export const ProgressBar = styled.span`
  @media (max-width: 950px) {
    display: block;
    width: 100%;
    background-color: ${({ theme }) =>
      theme.colors.primary};
  }
`

export const SolutionSidebarItem = styled.li<any>`
  padding: 18px 30px;
  list-style: none;
  border-left: 5px solid ${({
    activeCategory,
    id,
    theme,
  }) =>
    activeCategory === id
      ? theme.colors.primary
      : theme.colors.background};

  @media (max-width: 950px) {
    display: none;
  }
`

export const SolutionContent = styled.div`
  width: 635px;
  margin: 0 0 0 auto;

  @media (max-width: 950px) {
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 16px;
  }
`
