import styled from 'styled-components'

export const ServiceInfoSectionTitle = styled.h3`
  margin: 14px 0;
  padding: 0;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
`

export const ServiceInfoSectionText = styled.p`
  margin: 10px 0 20px 0;
  padding: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.grey};
`

export const ServiceInfoSectionImage = styled.img`
  width: 100%;
  height: auto;
  margin: 10px 0 20px 0;

  @media (max-width: 768px) {
    height: 160px;
  }
`

export const SolutionFeatures = styled.ul`
  margin: 10px 0 20px 0;
`

export const SolutionFeatureItem = styled.li`
  display: flex;
  align-items: center;
  padding: 2px 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  svg {
    padding-right: 7px;
  }
`

export const ServiceSingleListWrapper = styled.div`
  max-width: 400px;
`
