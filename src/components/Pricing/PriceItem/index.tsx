import { FC, useState, MouseEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ToggleButtonGroup, ToggleButton } from '@mui/material'

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
} from './styled'

export const PriceItem: FC<IPriceItem> = ({
  title,
  price,
  features,
}) => {
  const [alignment, setAlignment] = useState<string>('Mo');
  const [isOpenModal, setIsOpenModal] =
    useState<boolean>(false)

  const handleCallModal = (): void => {
    setIsOpenModal(!isOpenModal)
  }

  const handleChange = (
    event: MouseEvent<HTMLElement>,
    newAlignment: string,
  ): void => {
    setAlignment(newAlignment)
  }

  return (
    <>
      <PriceItemContainer>
        <PriceItemTitle>{title}</PriceItemTitle>
        <PriceItemWrapperInner>
          <PriceItemPrice>{price}</PriceItemPrice>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform">
            <ToggleButton value="Mo">Mo</ToggleButton>
            <ToggleButton value="Yr">
            Yr
            </ToggleButton>
          </ToggleButtonGroup>
        </PriceItemWrapperInner>
        <Button
          variant="contained"
          clickHandle={handleCallModal}>
          Choose plan
        </Button>
        <PriceItemAdvantages>
          {features.map((name) => (
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
          {features.map((name) => (
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
