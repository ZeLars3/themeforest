import styled from 'styled-components'

export const SubscribeFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 445px;


  input {
    padding: 15px 30px 15px 25px;
    width: 320px;
    border: 1px solid transparent;
    background: ${({ theme }) => theme.colors.helperBlue3};
    border-radius: 6px 0 0 6px;
  }

  button {
    max-width: 125px;
    padding: 20px 15px;
    font-weight: 700;
    font-size: 16px;
    height: 48px;
    margin-left: -10px;
    line-height: 24px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid transparent;

    &:hover {
      color: white;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const Form = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
