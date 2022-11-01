import { memo, FC, ChangeEvent } from 'react'

import { FieldsProps } from '@/types'

import { FieldMessage } from '../LabelInput/styled'
import { TextareaField } from './styled'

export const Textarea: FC<FieldsProps> = ({
  onChangeText,
  error,
  placeholder,
  bgColor,
  message,
  ...restProps
}) => {
  const onChangeCallback = (
    e: ChangeEvent<HTMLInputElement>,
  ): void => {
    (onChangeText != null) && onChangeText(e)
  }

  return (
    <>
      <TextareaField
        bgColor={bgColor}
        onChange={onChangeCallback}
        placeholder={placeholder}
        error={error}
        {...restProps}
      />
      {message && <FieldMessage>{message}</FieldMessage>}
    </>
  )
}
