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
  name: yup
    .string()
    .min(NAME.min, 'Too Short!')
    .max(NAME.max, `Max symbols count: ${NAME.max}`)
    .required(NAME.req),
  email: yup
    .string()
    .email('Please, enter a valid Email')
    .required(EMAIL.req),
  job: yup
    .string()
    .min(THEME.min, 'Too Short!')
    .max(THEME.max, `Max symbols count: ${THEME.max}`)
    .required(THEME.req),
  message: yup
    .string()
    .min(THEME.min, 'Too Short!')
    .max(THEME.max, `Max symbols count: ${MESSAGE.max}`)
    .required(MESSAGE.req),
})

export const subscribeFields = [
  {
    name: 'email',
    text: '',
    placeholder: 'Your email',
  },
]

export const contactFields = [
  {
    label: 'Name',
    name: 'name',
    text: '',
    placeholder: 'Andrea',
  },
  {
    label: 'Email',
    name: 'email',
    text: '',
    placeholder: 'andrea@gmaol.com',
  },
  {
    label: 'Theme',
    name: 'job',
    text: '',
    placeholder: 'Job',
  },
  {
    label: 'Message',
    name: 'message',
    text: '',
    placeholder: 'Your message',
  },
]

export const helpFields = [
  {
    name: 'email',
    text: '',
    placeholder: 'Your email',
  },
  {
    name: 'name',
    text: '',
    placeholder: 'Your name',
  },
  {
    name: 'job',
    text: '',
    placeholder: 'Theme',
  },
  {
    name: 'message',
    text: '',
    placeholder: 'Your message',
  },
]
