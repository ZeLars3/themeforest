import styled from 'styled-components'

export const HelpWrapper = styled.div`
  background-color: ${({ theme }) =>
    theme.colors.background};
`

export const HelpContainer = styled.div`
  padding: 100px 0;
  max-width: 540px;
  margin: 0 auto;
  letter-spacing: -0.015em;

  button {
    margin: 0 auto;
    padding: 15px 52px;
    width: 190px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    border: none;
    color: ${({ theme }) => theme.colors.white};
  }
`

export const HelpTitle = styled.h2`
  font-weight: 800;
  text-align: center;
  font-size: 38px;
  line-height: 56px;
`

export const HelpText = styled.p`
  padding: 30px 0;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.grey};
`
