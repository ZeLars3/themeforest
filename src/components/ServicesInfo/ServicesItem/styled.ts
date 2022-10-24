import styled from 'styled-components'

export const ServiceItemContainer = styled.li`
  padding: 20px;

  @media (max-width: 768px) {
    margin: 0 auto 30px auto;
  }
`

export const ServiceItemTitle = styled.h2`
  padding: 25px 0 16px 0;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }
`

export const ServiceItemText = styled.p`
  padding-bottom: 20px;
  max-width: 470px;
  color: ${({ theme }) => theme.colors.grey};

  @media (max-width: 768px) {
    max-width: 278px;
    font-size: 14px;
    line-height: 24px;
  }
`

export const Button = styled.button`
  text-align: left;
  cursor: pointer;
  border: none;
  font-weight: 600;
  background: none;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  transition: 0.7s;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }
`

export const ServiceItemLink = styled.a``
export const Icon = styled.img``
