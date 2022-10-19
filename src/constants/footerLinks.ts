import { Routes } from 'enums'
import { ILinkItem } from 'types'

export const FOOTER_LINKS: ILinkItem[] = [
  { name: 'Home', route: Routes.Home },
  { name: 'Solutions', route: Routes.Solutions },
  { name: 'Blog', route: Routes.Blog },
  { name: 'Contacts', route: Routes.Contacts },
  { name: 'Our Team', route: Routes.OurTeam },
  { name: 'About Us', route: Routes.AboutUs },
  { name: 'Services', route: Routes.Services },
  { name: 'FAQs', route: Routes.FAQs }
]

export const FOOTER_SERVICES: ILinkItem[] = [
  { name: 'Pages', route: Routes.Home },
  { name: 'Elements', route: Routes.Elements },
  { name: 'FAQ', route: Routes.FAQs },
  { name: 'Pricing', route: Routes.Home },
  { name: 'Site map', route: Routes.Home }
]