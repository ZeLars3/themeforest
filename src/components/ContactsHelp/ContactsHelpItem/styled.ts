import styled from 'styled-components'

export const ContactsInfoItem = styled.li`
  flex-grow: 1;
  margin-right: 47px;
  list-style: none;

  @media (max-width: 768px) {
    margin: 0 0 20px 0;
  }
`

export const ContactsHelpTitle = styled.h4`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
`

export const ContactsHelpText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
`

export const Icon = styled.img`
  max-width: 20px;
  margin-right: 14.5px;
  fill: ${({ theme }) => theme.colors.black};
`

export const TitleText = styled.span``
