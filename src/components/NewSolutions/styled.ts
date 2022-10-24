import styled from 'styled-components'

export const SolutionContainer = styled.section`
  max-width: 100%;
  background-color: ${({ theme }) =>
    theme.colors.background};
`

export const SolutionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    padding: 40px 0 50px 0;
    flex-direction: column;
  }
`

export const WrapperImage = styled.div`
  margin-right: 46px;

  @media (max-width: 768px) {
    margin 0 0 20px 0;
  }
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
  }

  @media (max-width: 768px) {
    padding: 0 16px;

    button {
      width: 100%;
    }
  }
`

export const SolutionTitle = styled.h1`
  max-width: 450px;
  font-weight: 800;
  font-size: 38px;
  line-height: 56px;
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 40px;
  }
`

export const SolutionText = styled.p`
  padding: 20px 0;
  font-size: 20px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
`
