import styled from 'styled-components'
import Button from '@mui/material/Button'

export const ContactHelpContainer = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 360px) {
    width: 100%;
  }
`

export const FormButton = styled(Button)`
  margin: 20px 0 0 auto !important;
  width: 137px;
  padding: 10px 51px !important;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const HelpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;

  input,
  textarea {
    margin: 10px 0 0 0;
    padding: 15px;
  }
`

export const HelpFieldset = styled.fieldset`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  border: none;

  input {
    flex-grow: 1;
    width: 100%;
  }

  @media (max-width: 360px) {
    flex-direction: column;
    gap: 0;

    input {
      width: 100%;
    }
  }
`
