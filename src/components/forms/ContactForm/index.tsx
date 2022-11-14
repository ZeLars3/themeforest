import { useRef, FC, useState } from 'react'
import emailjs, { init } from '@emailjs/browser'
import { useFormik } from 'formik'

import { IContactForm } from '@/types'

import { ContactFormContainer, FormButton, FormLegend } from './styled'
import {
  contactFields,
  sendEmailSchema,
} from '../validationSchema'
import { LabelInput } from '../LabelInput'

init(process.env.REACT_APP_EMAIL_PUBLIC_KEY as string)

export const ContactForm: FC<IContactForm> = ({
  title,
}) => {
  const [_, setMessage] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(false)
  const contactFormRef = useRef<HTMLFormElement>(null)

  const initialValues = contactFields.reduce<{ [key: string]: string }>((acc, { name }) => {
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
        contactFormRef.current as HTMLFormElement,
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
    <ContactFormContainer>
      <FormLegend variant="h3">{title}</FormLegend>
      <form
        ref={contactFormRef}
        onSubmit={formik.handleSubmit}>
        {contactFields.map(
          ({ label, name, placeholder }) => (
            <LabelInput
              key={name}
              name={name}
              label={label}
              placeholder={placeholder}
              value={formik.values[name]}
              error={formik.touched[name] && Boolean(formik.errors[name])}
              message={formik.errors[name]}
              onChange={formik.handleChange}
          />
          ),
        )}
        <FormButton variant="contained" disabled={disabled} type="submit">
          Send
        </FormButton>
      </form>
    </ContactFormContainer>
  )
}
