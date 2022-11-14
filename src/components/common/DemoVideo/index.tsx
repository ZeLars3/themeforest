import { FC } from 'react'
import Dialog from '@mui/material/Dialog'

import { IDemoVideo } from '@/types'

export const DemoVideo: FC<IDemoVideo> = ({
  onClose,
  isOpen,
}) => {
  return (
    <Dialog onClose={onClose} open={isOpen}>
      <iframe
        width="550"
        height="270"
        src="https://www.youtube.com/embed/TxZwqVTaCmA?start=97"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </Dialog>
  )
}
