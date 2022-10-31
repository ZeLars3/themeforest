import styled from 'styled-components'

export const AllServicesWrapper = styled.div`
  width: 330px;
`

export const AllServicesListWrapper = styled.ul`
  padding: 16px 0;

  @media (max-width: 360px) {
    padding: 50px 0;
  }
`

export const Title = styled.h2`
  padding: 0 0 20px 0;
  font-weight: 800;
  font-size: 30px;
  line-height: 40px;
`

export const AllServicesItem = styled.li<any>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
  cursor: pointer;

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.grey};
  }
`

export const Icon = styled.img``
