import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1110px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 16px;
  }
`

export const ContactWrapper = styled.div`
  padding: 40px 0;

  button {
    margin-top: 40px;
    padding: 15px 0;
    width: 100%;
    border: none;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.015em;
  }

  @media (max-width: 768px) {
    background: ${({ theme }) => theme.colors.background};
  }
`

export const ContactTitle = styled.h1`
  font-weight: 800;
  font-size: 30px;
  line-height: 40px;
  letter-spacing: -0.015em;
`

export const ContactSubtitle = styled.p`
  padding: 45px 0 30px 0;
  max-width: 275px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
`
export const WrapperItem = styled.div``
