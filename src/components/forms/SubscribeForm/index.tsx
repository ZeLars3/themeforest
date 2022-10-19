import { FC, FormEvent, useRef, useState } from 'react'
import emailjs, { init } from '@emailjs/browser'
import { useFormik } from 'formik'

import { TextInput, Button } from 'components/common'

import { sendEmailSchema, subscribeFields } from '../validationSchema'
import { Form, SubscribeFormContainer } from './styled'

init('j-PjuD4i90vcyH5lb')

export const SubscribeForm: FC = () => {
  const [_, setMessage] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(false)

  const initialValues = subscribeFields.reduce<{ [key: string]: string }>((acc, { name }) => {
    acc[name] = ''
    return acc
  }, {})

  const subscribeRef = useRef<HTMLFormElement>(null)

  const formik = useFormik({
    initialValues,
    validationSchema: sendEmailSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: () => {
      alert('You are successfuly subscribe')
    }
  })

  const sendEmail = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    setDisabled(true)
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID as string,
        process.env.REACT_APP_TEMPLATE_ID as string,
        subscribeRef.current as HTMLFormElement,
        process.env.REACT_APP_PUBLIC_KEY as string,
      )
      .then(
        () => setMessage('success'),
        () => setMessage('error')
      )
      .finally(() => setDisabled(false))
  }

  return (
    <SubscribeFormContainer>
      <Form ref={subscribeRef} onSubmit={sendEmail}>
        {
          subscribeFields.map(({ name, placeholder }) => (
            <TextInput
              key={name}
              name={name}
              placeholder={placeholder}
              value={formik.values[name]}
              error={formik.touched[name] && Boolean(formik.errors[name])}
              message={formik.errors[name]}
              onChange={formik.handleChange}
            />
          ))
        }
        <Button
          size='form'
          type='submit'
          btnType='square'
          isDisable={disabled}
          contentPosition='center'
        >
          Send
        </Button>
      </Form>
    </SubscribeFormContainer>
  )
}
