import { Routes } from 'enums'

export interface ILinkItem {
    name: string
	route: Routes
}

export interface IStatisticAmount {
    count: string
    title: string
}

export interface IBenefitItem {
    title: string
    text: string
    icon: string
}

export interface IPriceItem {
    id: number
    title: string
    price: string
    features: string[]
}
  
export type IInitialApp = {
    viewport: string
}
  
export interface IServicesItem {
    icon: string
    title: string
    text: string
    id?: string
}

export interface IContactItem {
    title: string
    name: string
  }
