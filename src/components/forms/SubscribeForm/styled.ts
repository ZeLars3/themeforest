import styled from 'styled-components'
import Button from '@mui/material/Button'

export const SubscribeFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 445px;

  @media (max-width: 768px) {
    width: 100%;
  }

  input {
    padding: 15px 30px 15px 25px;
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
`

export const FormButton = styled(Button)`
  z-index: 1;
  width: 125px;
  margin-left: -10px !important;
  padding: 15px 20px !important;
  color: ${({ theme }) => theme.colors.black} !important;
  background-color: ${({ theme }) => theme.colors.white} !important;
  border: 1px solid transparent;
  outline-color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0 !important;;
    padding: 15px !important;
  }
`

export const Form = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
