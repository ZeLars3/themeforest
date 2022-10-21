import { IPriceItem } from 'types'

export const PRICING_ITEMS: IPriceItem[] = [
  {
    id: 1,
    title: 'Free trial',
    price: '$00',
    features: [
      'For small teams – 5 users',
      'Community support',
    ],
  },
  {
    id: 2,
    title: 'Lite',
    price: '$99',
    features: [
      'For small teams – 15 users',
      'Individual support',
      'Individual data – 60GB',
    ],
  },
  {
    id: 3,
    title: 'Basic',
    price: '$00',
    features: [
      'For big teams – 30 users',
      'Individual support',
      'Individual data – 120GB',
      'Advanced permissions',
    ],
  },
  {
    id: 4,
    title: 'For enterprises',
    price: 'Custom',
    features: [
      'Unlimited team members',
      'Individual support',
      'Unlimited Individual data',
      'Advanced permissions',
      'Data history',
      'Audit log',
      'All functions included',
    ],
  },
]
