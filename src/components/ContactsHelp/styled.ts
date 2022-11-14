import styled from 'styled-components'
import Box from '@mui/material/Box'

export const ContactsHelpContainer = styled.section`
  padding: 20px 16px 120px 16px;

  @media (max-width: 768px) {
    padding: 10px 16px 50px 16px;
  }
`

export const ContactsHelpWrapper = styled(Box)`
  max-width: 1110px;
  margin: 0 auto;
`

export const Wrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  padding-top: 75px;

  @media (max-width: 768px) {
    padding-top: 40px;
  }
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

export const ContactsHelpList = styled.ul`
  display: flex;

  @media (max-width: 768px) {
    display: block;
  }
`
