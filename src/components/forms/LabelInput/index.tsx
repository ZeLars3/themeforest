import { FC, ChangeEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { FieldsProps } from '@/types'

import {
  FieldLabel,
  LabelInputContainer,
  LabelInputField,
  FieldMessage,
} from './styled'

export const LabelInput: FC<FieldsProps> = ({
  label,
  onChangeText,
  error,
  message,
  placeholder,
  ...restProps
}) => {
  const onChangeCallback = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    onChangeText && onChangeText(e)
  }

  return (
    <LabelInputContainer>
      <FieldLabel htmlFor={uuidv4()}>{label}</FieldLabel>
      <LabelInputField
        id={uuidv4()}
        placeholder={placeholder}
        onChange={onChangeCallback}
        error={error}
        {...restProps}
      />
      {message && <FieldMessage>{message}</FieldMessage>}
    </LabelInputContainer>
  )
}
