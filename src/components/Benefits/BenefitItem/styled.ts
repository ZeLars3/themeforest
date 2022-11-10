import styled from 'styled-components'

export const BenefitListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 25px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.shadows.shadowCard3};

  @media (max-width: 768px) {
    width: 244px;
    height: 248px;
  }
`

export const BenefitItemTitle = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.015em;
`

export const BenefitItemText = styled.p`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
`

export const Icon = styled.img`
  width: 45px;
  height: 47px;
  margin-bottom: 20px;
`
