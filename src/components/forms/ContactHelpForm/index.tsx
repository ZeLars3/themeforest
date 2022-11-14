import { useRef, useState } from 'react'
import emailjs, { init } from '@emailjs/browser'
import { useFormik } from 'formik'

import { TextInput } from '@/components/common'

import {
  ContactHelpContainer,
  FormButton,
  HelpFieldset,
  HelpForm,
} from './styled'
import {
  helpFields,
  sendEmailSchema,
} from '../validationSchema'
import { TextareaField } from '../Textarea/styled'

init(process.env.REACT_APP_EMAIL_PUBLIC_KEY as string)

export const ContactHelpForm = () => {
  const [_, setMessage] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(false)
  const contactHelpFormRef = useRef<HTMLFormElement>(null)

  const [, , theme, text] = helpFields
  const initialValues = helpFields.reduce<{ [key: string]: string }>((acc, { name }) => {
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
        process.env.REACT_APP_EMAIL_TEMPLATE_CONTACT as string,
        contactHelpFormRef.current as HTMLFormElement,
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
    <ContactHelpContainer>
      <HelpForm
        ref={contactHelpFormRef}
        onSubmit={formik.handleSubmit}>
        <HelpFieldset>
          {helpFields
            .slice(0, 2)
            .map(({ name, placeholder }) => (
              <TextInput
                bgColor="white"
                border
                key={name}
                name={name}
                placeholder={placeholder}
                value={formik.values[name]}
                error={
                  formik.touched[name] &&
                  Boolean(formik.errors[name])
                }
                message={formik.errors[name]}
                onChange={formik.handleChange}
              />
            ))}
        </HelpFieldset>
        <TextInput
          placeholder={theme.placeholder}
          name={theme.name}
          bgColor="white"
          border
          error={
            formik.touched[theme.name] &&
            Boolean(formik.errors[theme.name])
          }
          message={formik.errors[theme.name]}
          onChange={formik.handleChange}
        />
        <TextareaField
          type="text"
          placeholder={text.placeholder}
          name={text.name}
          bgColor="white"
          border
          error={
            formik.touched[text.name] &&
            Boolean(formik.errors[text.name])
          }
          message={formik.errors[text.name]}
          onChange={formik.handleChange}
        />
        <FormButton
          type="submit"
          variant="contained"
          disabled={disabled}>
          Send
        </FormButton>
      </HelpForm>
    </ContactHelpContainer>
  )
}
