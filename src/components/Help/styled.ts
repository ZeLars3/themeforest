import styled from 'styled-components'

export const HelpContainer = styled.section`
  background-color: ${({ theme }) =>
    theme.colors.background};
`

export const HelpWrapper = styled.div`
  padding: 100px 0;
  max-width: 540px;
  margin: 0 auto;
  letter-spacing: -0.015em;

  button {
    margin: 0 auto;
    padding: 15px 35px;
    width: 190px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 768px) {
    padding: 50px 16px;

    button {
      width: 100%;
    }
  }
`

export const HelpTitle = styled.h2`
  font-weight: 800;
  text-align: center;
  font-size: 38px;
  line-height: 56px;

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 40px;
  }
`

export const HelpText = styled.p`
  padding: 30px 0;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.grey};

  @media (max-width: 768px) {
    padding: 20px 0 30px 0;
  }
`
