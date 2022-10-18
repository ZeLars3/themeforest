import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyles from 'assets/styles/globalStyles'

import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from 'styled-components'
import theme from 'assets/styles/theme'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

reportWebVitals()
