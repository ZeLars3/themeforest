import { FC, FormEvent, useRef, useState } from 'react'
import emailjs, { init } from '@emailjs/browser'
import { useFormik } from 'formik'

import { TextInput, Button } from '@/components/common'
import { useTypedSelector } from '@/hooks'

import { sendEmailSchema, subscribeFields } from '../validationSchema'
import { Form, SubscribeFormContainer } from './styled'

init(process.env.REACT_APP_PUBLIC_KEY as string)

export const SubscribeForm: FC = () => {
  const [_, setMessage] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(false)
  const subscribeRef = useRef<HTMLFormElement>(null)

  const currentViewport: string = useTypedSelector(
    ({ app }) => app.viewport,
  )
  const initialValues = subscribeFields.reduce<{ [key: string]: string }>((acc, { name }) => {
    acc[name] = ''
    return acc
  }, {})

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: sendEmailSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (_, { resetForm }) => {
      setDisabled(true)
      emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID as string,
        'template_98jhgo7',
        subscribeRef.current as HTMLFormElement,
        process.env.REACT_APP_PUBLIC_KEY as string,
      )
      .then(
        () => {
          setMessage('success')
          resetForm()
        },
        () => setMessage('error')
      )
      .finally(() => setDisabled(false))
    },
  })

  return (
    <SubscribeFormContainer>
      <Form ref={subscribeRef} onSubmit={formik.handleSubmit}>
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
          type='submit'
          isDisable={disabled}
          variant='contained'>
          {currentViewport === 'desktop' ? 'Send' : 'Subscribe'}
        </Button>
      </Form>
    </SubscribeFormContainer>
  )
}
