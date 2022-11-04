import styled from 'styled-components'

export const BlogNewsItemContainer = styled.li`
  max-width: 1110px;
  margin: 0 auto;
  display: flex;
  padding: 3px 0;
  list-style: none;
  border-radius: 6px;
  margin-bottom: 30px;
  transition: 0.7s;
  border: 1px solid
    ${({ theme }) => theme.colors.helperBlue3};
  ${({ theme }) => theme.shadows.shadowCard3};

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    transform: translateX(40px);
    transition: 0.7s;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.tertiary};
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const BlogNewsItemTitle = styled.h3`
  font-weight: 800;
  font-size: 30px;
  line-height: 40px;
  letter-spacing: -0.015px;

  @media (max-width: 768px) {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
  }
`

export const BlogNewsItemInfo = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`

export const BlogNewsItemText = styled.p`
  font-size: 16px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.grey};
`

export const BlogNewsItemImg = styled.img`
  @media (max-width: 768px) {
    width: 320px;
    height: 160px;
    margin: 0 auto;
  }
`
