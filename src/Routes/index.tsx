import { FC, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Routes as PathRoute } from 'enums'
import { OurTeamSingle } from 'components'
import { SolutionSingle } from 'pages/Solutions/SolutionSingle'

const Home = lazy(() => import('pages/Home'))
const AboutUs = lazy(() => import('pages/AboutUs'))
const Contacts = lazy(() => import('pages/Contacts'))
const FAQs = lazy(() => import('pages/FAQs'))
const Services = lazy(() => import('pages/Services'))
const OurTeam = lazy(() => import('pages/OurTeam'))
const Solutions = lazy(() => import('pages/Solutions'))
const ServiceSingle = lazy(() => import('pages/Services/SercviceSingle'))

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
  </Routes>
)

export default ContentRoutes
