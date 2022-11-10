import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from 'react'

import { ReactComponent } from '*.svg'

export type ButtonType = 'round' | 'square'

export type ButtonSize =
  | 'large'
  | 'big'
  | 'form'
  | 'medium'
  | 'base'
  | 'small'

export type DefaultButtonPropsType = DetailedHTMLProps<
ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
>
export type ButtonPropsType = DefaultButtonPropsType & {
  btnType?: ButtonType
  children?: React.ReactNode
  size?: ButtonSize
  inversion?: boolean
  isDisable?: boolean
  icon?: typeof ReactComponent
  clickHandle?: () => void
  variant: 'text' | 'outlined' | 'contained'
}

export interface IButtonContainer {
  btnType?: ButtonType
  size: ButtonSize
  inversion?: boolean
  isDisable?: boolean
}
