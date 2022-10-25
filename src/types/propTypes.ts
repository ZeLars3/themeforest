import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'

export interface IErrorBoundary {
  children: ReactNode;
}

export interface IMainLayout {
  children?: ReactNode;
}

export interface ITestimonialItem {
  name: string;
  position: string;
  avatar: string;
  text: string;
}

export interface IBlogItem {
  img: string
  date: string
  title: string
  text: string
}

export interface INavigation {
  menu: boolean
}

export interface IButtonVideo {
  handleClick(): void
}

export interface IContactForm {
  title: string
  titleSize: 'big' | 'small'
}

export type DefaultInput = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
export type LabelInputProps = DefaultInput & {
  label: string,
  onChangeText?: (e: ChangeEvent<HTMLInputElement>) => void,
  onEnter?: () => void
  error?: boolean
  message?: string
  placeholder?: string
}



