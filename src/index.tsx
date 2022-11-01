import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@/assets/styles/globalStyles'
import theme from '@/assets/styles/theme'
import store from '@/store'

import { App } from './app'
import reportWebVitals from './reportWebVitals'
import { ErrorBoundary } from './components'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)

reportWebVitals()
