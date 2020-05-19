'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createStore } from 'redux'
import App from './app'

// possibilita mapear store globalmente através de High Order Function
// conexão através do { connect } from 'react-redux'
import { Provider } from 'react-redux'
import reducer from 'reducers/counters'

// criando store do reducer configurado em redux-flow\reduces\counters
// para tornar global em <Provider ... />
const store = createStore(reducer)

import './css/style.css'

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <NextApp />
      </Provider>
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}
