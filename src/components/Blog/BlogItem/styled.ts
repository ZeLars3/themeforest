import styled from 'styled-components'

export const BlogItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  padding-top: 50px;
`

export const BlogItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const BlogItemDate = styled.span`
  margin: 20px 0 12px 0;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
`

export const BlogItemTitle = styled.h3`
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  letter-spacing: -0.015em;
`

export const BlogItemText = styled.p`
  padding: 12px 0;
  line-height: 28px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
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

export const Icon = styled.img`
  padding-left: 7px;
`

export const BlogItemImage = styled.img``
