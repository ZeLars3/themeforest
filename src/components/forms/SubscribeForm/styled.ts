import styled from 'styled-components'

export const SubscribeFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 445px;

  @media (max-width: 768px) {
    width: 100%;
  }

  input {
    width: 100%;
    padding: 15px 30px 15px 25px;
    border: none;
    min-height: 54px;
    background: ${({ theme }) => theme.colors.helperBlue3};
    border-radius: 6px 0 0 6px;

    @media (max-width: 768px) {
      margin: 20px 0;
      border-radius: 6px;
      background-color: transparent;
      border: 1px solid ${({ theme }) =>
        theme.colors.helperBlue2};
    }
  }

  button {
    position: relative;
    z-index: 1;
    margin-left: -10px;
    padding: 14px 20px;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid transparent;
    outline-color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.015em;

    @media (max-width: 768px) {
      width: 100%;
      margin-left: 0;
      padding: 15px;
    }
`

export const Form = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
