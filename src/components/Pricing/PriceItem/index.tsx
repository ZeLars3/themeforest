import { FC, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import FluentCheckmark from '@/assets/icons/checkmark.svg'
import { IPriceItem } from '@/types'
import { Button, Svgr } from '@/components/common'
import { CardModal } from '@/portals'
import {
  CardPrice,
  CardTitle,
  Span,
  TextWrapper,
} from '@/portals/CardModal/styled'
import { PayPalButton } from '@/components'

import {
  PriceItemAdvantageItem,
  PriceItemAdvantages,
  PriceItemContainer,
  PriceItemPrice,
  PriceItemTitle,
  PriceItemWrapperInner,
  PriceToggleWrapper,
} from './styled'

export const PriceItem: FC<IPriceItem> = ({
  title,
  price,
  features,
}) => {
  const [isOpenModal, setIsOpenModal] = useState <boolean>(false)

  const handleCallModal = (): void => {
    setIsOpenModal(!isOpenModal)
  }

  return (
    <>
      <PriceItemContainer>
        <PriceItemTitle>{title}</PriceItemTitle>
        <PriceItemWrapperInner>
          <PriceItemPrice>{price}</PriceItemPrice>
          <PriceToggleWrapper>
            <Button size="small" btnType="square">
              Mo
            </Button>
            <Button size="small" btnType="square">
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
          {features.map(name => (
            <PriceItemAdvantageItem key={uuidv4()}>
              <Svgr icon={FluentCheckmark} /> {name}
            </PriceItemAdvantageItem>
          ))}
        </PriceItemAdvantages>
      </PriceItemContainer>

      <CardModal
        open={isOpenModal}
        onClose={handleCallModal}>
        <TextWrapper>
          <CardTitle>
            Plan: <Span>{title}</Span>
          </CardTitle>
          <CardPrice>
            Price: <Span>{price}</Span>
          </CardPrice>
        </TextWrapper>
        <PriceItemAdvantages>
          {features.map(name => (
            <PriceItemAdvantageItem key={uuidv4()}>
              <Svgr icon={FluentCheckmark} /> {name}
            </PriceItemAdvantageItem>
          ))}
        </PriceItemAdvantages>
        <PayPalButton />
      </CardModal>
    </>
  )
}
