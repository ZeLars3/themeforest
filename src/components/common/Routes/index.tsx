import { FC } from 'react'
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom'

import { Home, Services } from 'pages'
import { Routes as PathRoute } from 'enums'

const ContentRoutes: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PathRoute.Home} element={<Home />} />
      <Route
        path={PathRoute.Services}
        element={<Services />}
      />
    </Routes>
  </BrowserRouter>
)

export default ContentRoutes
