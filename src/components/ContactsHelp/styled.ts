import styled from 'styled-components'

export const ContactsHelpContainer = styled.section`
  padding-bottom: 120px;

  @media (max-width: 768px) {
    padding-bottom: 50px;
  }
`

export const ContactsHelpWrapper = styled.div`
  max-width: 1110px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ContactsHelpTitle = styled.h1`
  max-width: 540px;
  font-weight: 800;
  font-size: 80px;
  line-height: 110%;
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 40px;
  }
`

export const ColorTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`

export const ContactsHelpFormWrapper = styled.div`
  flex-grow: 1;
  width: 540px;
  height: 352px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 40px 0 50px 0;
    height: auto;
  }
`

export const ContactsHelpPath = styled.div`
  padding: 20px 0 92px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    padding: 20px 0 40px 0;
  }
`

export const ContactsHelpLink = styled.a`
  color: ${({ theme }) => theme.colors.grey};
  text-decoration: none;
`

export const ContactsHelpList = styled.ul`
  display: flex;

  @media (max-width: 768px) {
    display: block;
  }
`
