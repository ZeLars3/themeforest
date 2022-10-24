import styled from 'styled-components'

export const TestimonialItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 350px;
  margin: 20px auto;
  padding: 35px;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.gray};
  ${({ theme }) => theme.shadows.shadowCard3};
`

export const TestimonialItemWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding-bottom: 26px;
  }
`
export const TestimonialItemAvatar = styled.div`
  margin-right: 20px;
  overflow: hidden;
`

export const Icon = styled.img`
  width: 80px;
  height: 80px;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`

export const TestimonialItemName = styled.h3`
  color: ${({ theme }) => theme.colors.black};
`

export const TestimonialItemPosition = styled.p`
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.grey};
  }
`

export const TestimonialItemText = styled.p`
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.grey};
  }
`

export const TestimonialItemInfo = styled.div``
