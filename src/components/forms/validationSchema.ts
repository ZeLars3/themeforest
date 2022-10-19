import * as yup from 'yup'

export const VALIDATION = {
  NAME: {
    min: 2,
    max: 30,
    req: 'Name is required',
  },
  EMAIL: {
    intro: 2,
    noEmail: 30,
    req: 'Email is required',
  },
  THEME: {
    min: 2,
    max: 50,
    req: 'Theme is required',
  },
  MESSAGE: {
    min: 10,
    max: 300,
    req: 'Message is required',
  },
}

const { NAME, EMAIL, MESSAGE, THEME } = VALIDATION

export const sendEmailSchema = yup.object().shape({
  form_name: yup
    .string()
    .min(NAME.min, 'Too Short!')
    .max(NAME.max, `Max symbols count: ${NAME.max}`)
    .required(NAME.req),
  form_email: yup
    .string()
    .email('Please, enter a valid Email')
    .required(EMAIL.req),
  form_job: yup
    .string()
    .min(THEME.min, 'Too Short!')
    .max(THEME.max, `Max symbols count: ${THEME.max}`)
    .required(THEME.req),
  form_message: yup
    .string()
    .min(THEME.min, 'Too Short!')
    .max(THEME.max, `Max symbols count: ${MESSAGE.max}`)
    .required(MESSAGE.req),
})

export const subscribeFields = [
  {
    name: 'form_email',
    text: '',
    placeholder: 'Your email',
  },
]
