import { ReactNode } from 'react'

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
