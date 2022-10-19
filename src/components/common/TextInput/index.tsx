import { FC, ChangeEvent } from 'react'

import {
  TextInputContainer,
  TextInputField,
  TextInputMessage,
} from './styled'
import { InputTextPropsType } from './types'

export const TextInput: FC<InputTextPropsType> = ({
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
    onChangeText && onChangeText(event)
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
