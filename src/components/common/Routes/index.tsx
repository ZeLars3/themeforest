import { FC } from 'react'
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom'

import {
  AboutUs,
  Contacts,
  FAQs,
  Home,
  OurTeam,
  Services,
} from 'pages'
import { Routes as PathRoute } from 'enums'
import { OurTeamSingle } from 'components'

const ContentRoutes: FC = () => (
  <BrowserRouter>
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
      <Route
        path={PathRoute.AboutUs}
        element={<AboutUs />}
      />
      <Route
        path={PathRoute.Contacts}
        element={<Contacts />}
      />
      <Route path={PathRoute.FAQs} element={<FAQs />} />
      <Route
        path={PathRoute.OurTeam}
        element={<OurTeam />}
      />
      <Route
        path={PathRoute.OurTeamSingle}
        element={<OurTeamSingle />}
      />
    </Routes>
  </BrowserRouter>
)

export default ContentRoutes
