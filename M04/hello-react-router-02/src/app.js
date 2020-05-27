'use strict'

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainApp from './main-app'

const App = () => (
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
)

export default App

// ====== SOLUCIONAR ERRO DE REDIRECIONAMENTO =======

// import { Route } from 'react-router-dom'

// <Route component={MainApp} />

// ======= OU (EM MAIN APP) =======

// export default withRouter()(MainApp)
