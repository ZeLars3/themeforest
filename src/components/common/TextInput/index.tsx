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
  const handleChangeCallback = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    onChangeText != null && onChangeText(event)
  }

  return (
    <TextInputContainer>
      <TextInputField
        onChange={handleChangeCallback}
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
