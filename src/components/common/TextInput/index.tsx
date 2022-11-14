import { FC, ChangeEvent } from 'react'

import { FieldsProps } from '@/types'

import {
  TextInputContainer,
  TextInputField,
  TextInputMessage,
} from './styled'

export const TextInput: FC<FieldsProps> = ({
  onChangeText,
  error,
  placeholder,
  bgColor,
  message,
  ...restProps
}) => {
  const onChangeCallback = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    (onChangeText != null) && onChangeText(e)
  }

  return (
    <TextInputContainer>
      <TextInputField
        onChange={onChangeCallback}
        placeholder={placeholder}
        error={error}
        message={message}
        {...restProps}
      />
      {message && (
        <TextInputMessage>{message}</TextInputMessage>
      )}
    </TextInputContainer>
  )
}
