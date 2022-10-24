import { FC } from 'react'

import { Wrapper } from './styled'

export const DemoVideo: FC = () => {
  return (
    <Wrapper>
      <iframe
        width="550"
        height="270"
        src="https://www.youtube.com/embed/TxZwqVTaCmA?start=97"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
     </iframe>
    </Wrapper>
  )
}
