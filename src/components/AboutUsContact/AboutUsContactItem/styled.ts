import styled from 'styled-components'

export const ContactsInfoItem = styled.li`
  margin-bottom: 24px;
  list-style: none;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`

export const InfoTitle = styled.p`
  line-height: 28px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
`

export const InfoSubtitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: 768px) {
    max-width: 300px;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
  }
`
