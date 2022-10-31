import styled from 'styled-components'

export const FormLegend = styled.h3<{ titleSize: string }>`
  margin-bottom: 30px;
  text-align: left;
  font-weight: 800;
  font-size: 30px;
  line-height: 40px;
  letter-spacing: -0.015em;
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

    button {
      display: flex;
      justify-content: center;
      margin: 83px 0 0 auto;
      border: none;
      padding: 10px 51px;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: -0.015em;
    }
  }
`
