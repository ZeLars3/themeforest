import { IContactItem } from '@/types'
import Call from '@/assets/icons/call.svg'
import Mail from '@/assets/icons/mail.svg'
import Location from '@/assets/icons/locationMarker.svg'

export const CONTACT_ITEMS: IContactItem[] = [
  {
    name: 'Email address',
    title: 'ensome@info.co.us',
    icon: Mail,
  },
  {
    name: 'Phone number',
    title: '+1 601-201-5580',
    icon: Call,
  },
  {
    name: 'Address',
    title:
      '1642 Washington Avenue, Jackson, MS, Mississippi, 39201',
    icon: Location,
  },
]
