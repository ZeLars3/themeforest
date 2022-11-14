import { FC } from 'react'
import { TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import LocationMarker from '@/assets/icons/locationBlue.png'
import { MAP_MARKERS } from '@/constants/mapMarkers'

import { MapWrapper } from './styled'

const markerIcon = new L.Icon({
  iconUrl: LocationMarker,
  iconSize: [30, 30],
})

export const Map: FC = () => {
  return (
    <MapWrapper
      center={[55.18468, 30.206947]}
      zoom={12}
      scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {MAP_MARKERS.map(({ street, position, id }) => (
        <Marker
          key={id}
          position={[position[0], position[1]]}
          icon={markerIcon}>
          <Popup>{street}</Popup>
        </Marker>
      ))}
    </MapWrapper>
  )
}
