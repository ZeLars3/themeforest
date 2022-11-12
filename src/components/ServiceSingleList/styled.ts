import styled from 'styled-components'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'

export const ServiceInfoSectionTitle = styled(Typography)`
  margin: 14px 0 !important;
`

export const ServiceInfoSectionText = styled(Typography)`
  margin: 10px 0 20px 0 !important;
  color: ${({ theme }) => theme.colors.grey} !important;
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

export const SolutionFeatureItem = styled(ListItem)`
  padding: 2px 0 !important;
  line-height: 24px;

  svg {
    padding-right: 7px;
  }
`

export const ServiceSingleListWrapper = styled(Box)`
  max-width: 400px;
`
