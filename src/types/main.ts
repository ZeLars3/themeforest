import { Routes } from '@/enums'

export interface ILinkItem {
    name: string
	route: Routes
    text?: string
    title?: string
}

export interface IStatisticAmount {
    count: string
    title: string
}

export interface IBenefitItem {
    id: string | number
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

export interface ISolutionSingleArticle {
    defenition: string
    description: string
}
  
export type ISolutionSingleItem = {
    id: string
    name: string
    text: string
    refs?: any
    activeCategory?: any
    setActiveCategory?: any
    pageHeight?: number
    img?: string
    list?: ISolutionSingleArticle[]
}

export interface IContactItem {
    title: string
    name: string
    icon?: string
}

export interface IMapMarker {
    id: number
    position: number[]
    street: string
}

export interface IFAQsItem {
    id: string | number
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
  
export interface IServiceSingle {
    id: string | number
    title: string,
    text: string,
    img?: string,
    list?: string[],
}