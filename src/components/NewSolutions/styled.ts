import styled from 'styled-components'

export const SolutionContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;
  background-color: ${({ theme }) =>
    theme.colors.background};
`

export const WrapperImage = styled.div`
  margin-right: 46px;
`

export const Image = styled.img`
  height: auto;
  width: auto;
  max-width: 750px;
  max-height: 740px;
`

export const WrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 540px;

  button {
    color: ${({ theme }) => theme.colors.white};
    border: none;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    padding: 15px 37px;
    width: 190px;

    &:hover {
      background: ${({ theme }) => theme.colors.hover};
    }
`

export const SolutionTitle = styled.h1`
  font-weight: 800;
  font-size: 38px;
  line-height: 56px;
  letter-spacing: -0.015em;
`

export const SolutionText = styled.p`
  padding: 20px 0;
  font-size: 20px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
`
