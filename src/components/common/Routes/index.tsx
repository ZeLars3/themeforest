import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import {
  AboutUs,
  Contacts,
  FAQs,
  Home,
  OurTeam,
  Services,
  Solutions,
} from 'pages'
import { Routes as PathRoute } from 'enums'
import { OurTeamSingle } from 'components'
import { SolutionSingle } from 'pages/Solutions/SolutionSingle'

const ContentRoutes: FC = () => (
  <Routes>
    <Route path={PathRoute.Home} element={<Home />} />
    <Route
      path={PathRoute.Services}
      element={<Services />}
    />
    <Route
      path={PathRoute.Services}
      element={<Services />}
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
