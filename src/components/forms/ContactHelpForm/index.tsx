import { useRef, useState } from 'react'
import emailjs, { init } from '@emailjs/browser'
import { useFormik } from 'formik'

import { Button, TextInput } from '@/components/common'

import {
  ContactHelpContainer,
  HelpFieldset,
  HelpForm,
} from './styled'
import {
  contactFields,
  helpFields,
  sendEmailSchema,
} from '../validationSchema'
import { TextareaField } from '../Textarea/styled'

init(process.env.REACT_APP_PUBLIC_KEY as string)

export const ContactHelpForm = () => {
  const [_, setMessage] = useState <string>('')
  const [disabled, setDisabled] = useState<boolean>(false)
  const contactHelpFormRef = useRef<HTMLFormElement>(null)

  const [email, username, theme, text] = helpFields
  const initialValues = contactFields.reduce<{ [key: string]: string }>((acc, { name }) => {
    acc[name] = ''
    return acc
  }, {})

  const formik = useFormik({
    initialValues,
    validationSchema: sendEmailSchema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: (values, { resetForm }) => {
      sendEmail()
      resetForm()
    },
  })

  const sendEmail = (): void => {
    setDisabled(true)
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID as string,
        process.env.REACT_APP_TEMPLATE_ID as string,
        contactHelpFormRef.current as HTMLFormElement,
        process.env.REACT_APP_PUBLIC_KEY as string,
      )
      .then(
        () => setMessage('success'),
        () => setMessage('error'),
      )
      .finally(() => setDisabled(false))
  }

  return (
    <ContactHelpContainer>
      <HelpForm
        ref={contactHelpFormRef}
        onSubmit={formik.handleSubmit}>
        <HelpFieldset>
          <TextInput
            type="email"
            placeholder={email.placeholder}
            name={email.name}
            bgColor="white"
            border
          />
          <TextInput
            type="text"
            placeholder={username.placeholder}
            name={username.name}
            bgColor="white"
            border
            required
          />
        </HelpFieldset>
        <TextInput
          type="text"
          placeholder={theme.placeholder}
          name={theme.name}
          bgColor="white"
          border
          required
        />
        <TextareaField
          type="text"
          placeholder={text.placeholder}
          name={text.name}
          bgColor="white"
          border
          required
        />
        <Button
          type="submit"
          size="form"
          btnType="square">
          Send
        </Button>
      </HelpForm>
    </ContactHelpContainer>
  )
}
