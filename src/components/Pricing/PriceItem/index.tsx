import { FC, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import FluentCheckmark from 'assets/icons/fluentCheckmark.svg'
import { IPriceItem } from 'types'

import {
  PriceItemAdvantageItem,
  PriceItemAdvantages,
  PriceItemContainer,
  PriceItemPrice,
  PriceItemTitle,
  PriceItemWrapperInner,
  PriceToggleWrapper,
  Icon
} from './styled'
import { Button } from 'components/common'

export const PriceItem: FC<IPriceItem> = ({
  title,
  price,
  features,
  id
}) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [selectedCard, setSelectCard] = useState<number>(1)

  const handleCallModal = (): void => {
    setIsOpenModal(!isOpenModal)
  }

  const handleSelectPrice = () => {
    setSelectCard(id)
  }

  return (
    <PriceItemContainer selected={selectedCard !== id ? 'select' : ''} onClick={handleSelectPrice}>
      <PriceItemTitle>{title}</PriceItemTitle>
      <PriceItemWrapperInner>
        <PriceItemPrice>{price}</PriceItemPrice>
        <PriceToggleWrapper>
          <Button
            size="small"
            btnType="square">
            Mo
          </Button>
          <Button
            size="small"
            btnType="square"
            inversion>
            Yr
          </Button>
        </PriceToggleWrapper>
      </PriceItemWrapperInner>
      <Button
        size="large"
        btnType="square"
        clickHandle={handleCallModal}>
        Choose plan
      </Button>
      <PriceItemAdvantages>
        {
          features.map(name => (
            <PriceItemAdvantageItem
              key={uuidv4()}
              checkmark={FluentCheckmark}>
              <Icon src={FluentCheckmark} /> {name}
            </PriceItemAdvantageItem>
          ))
        }
      </PriceItemAdvantages>
    </PriceItemContainer>
  )
}
