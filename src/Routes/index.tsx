import { FC, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Routes as PathRoute } from '@/enums'

const Home = lazy(async () => await import('@/pages/Home'))
const AboutUs = lazy(async () => await import('@/pages/AboutUs'))
const Contacts = lazy(async () => await import('@/pages/Contacts'))
const FAQs = lazy(async () => await import('@/pages/FAQs'))
const Services = lazy(async () => await import('@/pages/Services'))
const OurTeam = lazy(async () => await import('@/pages/OurTeam'))
const Solutions = lazy(async () => await import('@/pages/Solutions'))
const ServiceSingle = lazy(async () => await import('@/pages/Services/SercviceSingle'))
const SolutionSingle = lazy(async () => await import('@/pages/Solutions/SolutionSingle'))
const OurTeamSingle = lazy(async () => await import('@/pages/OurTeam/OutTeamSingle'))
const NotFound = lazy(async () => await import('@/pages/NotFound'))
const Blog = lazy(async () => await import('@/pages/Blog'))

const ContentRoutes: FC = () => (
  <Routes>
    <Route path={PathRoute.Home} element={<Home />} />
    <Route
      path={PathRoute.Services}
      element={<Services />}
    />
    <Route
      path={PathRoute.ServiceSingle}
      element={<ServiceSingle />}
    />
    <Route path={PathRoute.AboutUs} element={<AboutUs />} />
    <Route
      path={PathRoute.Contacts}
      element={<Contacts />}
    />
    <Route path={PathRoute.FAQs} element={<FAQs />} />
    <Route path={PathRoute.OurTeam} element={<OurTeam />} />
    <Route
      path={PathRoute.OurTeamSingle}
      element={<OurTeamSingle />}
    />
    <Route
      path={PathRoute.Solutions}
      element={<Solutions />}
    />
    <Route
      path={PathRoute.SolutionSingle}
      element={<SolutionSingle />}
    />
    <Route
      path={PathRoute.Blog}
      element={<Blog />}
    />
     <Route
      path={PathRoute.NotFound}
      element={<NotFound />}
    />
  </Routes>
)

export default ContentRoutes
