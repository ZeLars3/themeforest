import { FC, useRef, useState } from 'react'
import emailjs, { init } from '@emailjs/browser'
import { useFormik } from 'formik'

import { TextInput } from '@/components/common'
import { useTypedSelector } from '@/hooks'

import { sendEmailSchema, subscribeFields } from '../validationSchema'
import { Form, FormButton, SubscribeFormContainer } from './styled'

init(process.env.REACT_APP_EMAIL_PUBLIC_KEY as string)

export const SubscribeForm: FC = () => {
  const [_, setMessage] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(false)
  const subscribeFormRef = useRef<HTMLFormElement>(null)

  const currentViewport: string = useTypedSelector(
    ({ app }) => app.viewport,
  )
  const initialValues = subscribeFields.reduce<{ [key: string]: string }>((acc, { name }) => {
    acc[name] = ''
    return acc
  }, {})

  const formik = useFormik({
    initialValues,
    validationSchema: sendEmailSchema,
    onSubmit: (_, { resetForm }) => {
      setDisabled(true)
      emailjs
        .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID as string,
        process.env.REACT_APP_EMAIL_TEMPLATE_SUBSCRIBE as string,
        subscribeFormRef.current as HTMLFormElement,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY as string
        )
        .then(
          () => {
            setMessage('success')
            resetForm()
          },
          () => setMessage('error'),
        )
        .finally(() => {
          setDisabled(false)
          resetForm()
        })
    },
  })

  return (
    <SubscribeFormContainer>
      <Form ref={subscribeFormRef} onSubmit={formik.handleSubmit}>
        {subscribeFields.map(({ name, placeholder }) => (
            <TextInput
              key={name}
              name={name}
              placeholder={placeholder}
              value={formik.values[name]}
              error={formik.touched[name] && Boolean(formik.errors[name])}
              message={formik.errors[name]}
              onChange={formik.handleChange}
            />
          ),
        )}
        <FormButton
          disabled={disabled}
          type="submit"
          variant="contained">
          {currentViewport === 'desktop' ? 'Send' : 'Subscribe'}
        </FormButton>
      </Form>
    </SubscribeFormContainer>
  )
}
