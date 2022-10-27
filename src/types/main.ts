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
    icon?: string
}

export interface IMapMarker {
    position: number[]
    street: string
}

export interface IFAQsItem {
    title: string
    text: string
}

interface IProfileSocialItem {
    name: string
    path: string
  }

export interface ITeamItem {
    name: string
    position: string
    socials: IProfileSocialItem[]
    avatar: string
    isMargin?: boolean
    id?: string
    mail?: string
    description?: string
  }
  