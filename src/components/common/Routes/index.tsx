import { FC } from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'

import { Home } from 'pages'

const ContentRoutes: FC = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </HashRouter>
)

export default ContentRoutes
