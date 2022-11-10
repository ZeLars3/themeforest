import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@/assets/styles/globalStyles'
import theme from '@/assets/styles/theme'
import store from '@/store'
import { ErrorBoundary } from '@/components'
import { ScrollToTop } from '@/helpers'

import { App } from './app'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
