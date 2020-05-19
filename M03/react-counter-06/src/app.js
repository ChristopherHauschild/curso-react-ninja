'use strict'

import React from 'react'
import Counter from 'components/counter'

import './css/style.css'

const App = ({ store }) => (
  <Counter store={store} />
)

export default App
