import styled from 'styled-components'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export const FormLegend = styled(Typography)`
  margin-bottom: 30px !important;
  text-align: left;
`

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 445px;
  height: 590px;
  padding: 50px;
  margin: 0 auto;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
  }
`

export const FormButton = styled(Button)`
  margin: 83px 0 0 auto !important;
  padding: 10px 51px !important;
`
