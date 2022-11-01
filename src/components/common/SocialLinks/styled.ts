import styled from 'styled-components'

import { Svgr } from '../Svgr'

export const SocialLinksContainer = styled.ul`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`

export const SocialLinksTitle = styled.h2`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-right: auto;
  }
`

export const SocialLinksIcon = styled(Svgr)`
  svg {
    margin-right: 13px;
    width: 24px;
    height: 24px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }
  }
`
