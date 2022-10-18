import { Routes } from 'enums'
import { IHeaderItem } from 'types'

export const HEADER_DROPDOWN_ITEMS: IHeaderItem[] = [
  { name: 'Services', route: Routes.Services },
  { name: 'About Us', route: Routes.AboutUs },
  { name: 'Our Team', route: Routes.OurTeam },
  { name: 'FAQs', route: Routes.FAQs },
]
