import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react'

export type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
export type InputTextPropsType = DefaultInputPropsType & {
  onChangeText?: (e: ChangeEvent<HTMLInputElement>) => void,
  onEnter?: () => void,
  error?: boolean,
  message?: string,
  placeholder?: string,
  bgColor?: 'white' | 'blue',
  border?: boolean,
}
