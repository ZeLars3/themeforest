import styled from 'styled-components'
import { MapContainer } from 'react-leaflet'

export const MapWrapper = styled(MapContainer)`
  height: 460px;
  width: 100%;

  @media (max-width: 768px) {
    height: 290px;
  }
`
