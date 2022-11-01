import  { useRef, FC, useState } from 'react'
import emailjs, { init } from '@emailjs/browser'
import { useFormik } from 'formik'

import { IContactForm } from '@/types'
import { Button } from '@/components/common'

import { ContactFormContainer, FormLegend } from './styled'
import { contactFields, sendEmailSchema } from '../validationSchema'
import { LabelInput } from '../LabelInput'

init(process.env.REACT_APP_PUBLIC_KEY as string)

export const ContactForm: FC<IContactForm> = ({ title, titleSize }) => {
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
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: (values, {resetForm}) => {
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
        contactFormRef.current as HTMLFormElement,
        process.env.REACT_APP_PUBLIC_KEY as string,
      )
      .then(
        () => setMessage('success'),
        () => setMessage('error')
      )
      .finally(() => setDisabled(false))
  }

  return (
    <ContactFormContainer>
      <FormLegend titleSize={titleSize}>{title}</FormLegend>
      <form ref={contactFormRef} onSubmit={formik.handleSubmit}>
        {contactFields.map(({ label, name, placeholder }) => (
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
        ))}
        <Button
          size='form'
          type='submit'
          btnType='square'
        >
          Send
        </Button>
      </form>
    </ContactFormContainer>
  )
}
