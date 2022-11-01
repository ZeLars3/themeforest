import styled from 'styled-components'

export const FAQsItemContainer = styled.li`
  max-width: 1110px;
  padding: 35px;
  list-style: none;
  margin-bottom: 20px;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid ${({theme}) => theme.colors.grey};

  &:last-child {
    margin-bottom: 0
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`

export const FAQsItemTitle = styled.h4<{ isShow: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: ${({ isShow, theme }) =>
  isShow ? theme.colors.primary : theme.colors.black};

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`

export const FAQsItemSubtitle = styled.p`
  margin-top: 15px;
  font-size: 20px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: ${({ theme} ) => theme.colors.grey};

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
`