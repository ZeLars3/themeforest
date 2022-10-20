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
