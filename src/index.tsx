import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import GlobalStyles from 'assets/styles/globalStyles'
import theme from 'assets/styles/theme'

import App from './app'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from 'styled-components'
import store from './store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
