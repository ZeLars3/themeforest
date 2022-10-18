import { Routes } from 'enums'
import { ILinkItem } from 'types'

export const HEADER_DROPDOWN_ITEMS: ILinkItem[] = [
  { name: 'Services', route: Routes.Services },
  { name: 'About Us', route: Routes.AboutUs },
  { name: 'Our Team', route: Routes.OurTeam },
  { name: 'FAQs', route: Routes.FAQs },
]
