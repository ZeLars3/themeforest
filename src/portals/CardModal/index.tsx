import { FC, useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'

import { ICardModal } from 'types'

import { Card, ModalBackground } from './styled'

const modalRootElement = document.querySelector('#modal')

export const CardModal: FC<ICardModal> = ({
  children,
  open,
  onClose,
}) => {
  const element = useMemo(
    () => document.createElement('div'),
    [],
  )

  useEffect(() => {
    if (open) {
      modalRootElement?.appendChild(element)

      return () => {
        modalRootElement?.removeChild(element)
      }
    }
  })

  if (open) {
    return createPortal(
      <ModalBackground onClick={onClose}>
        <Card>{children}</Card>
      </ModalBackground>,
      element,
    )
  }

  return null
}
