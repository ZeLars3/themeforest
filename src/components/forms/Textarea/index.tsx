import { memo, FC, ChangeEvent } from 'react'

import { TextareaTextProps } from 'types'

import { FieldMessage } from '../LabelInput/styled'
import { TextareaField } from './styled'

export const Textarea: FC<TextareaTextProps> = ({
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
    onChangeText && onChangeText(e)
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
