'use script'

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'reducers'

export default ({ initialState } = {}) => {
  const enhancer = compose(applyMiddleware(logger), applyMiddleware(thunk))
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('reducers', () => {
      const nextReducer = require('reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

const logger = ({ dispatch, getState }) => (next) => (action) => {
  console.group(`LOGGER->${action.type}`)
  console.log('will dispatch: ', action)
  console.log('state: ', getState())
  const nextAction = next(action) // todo vez que dispatch for disparado middleware será executado
  console.log('next state: ', getState())
  console.groupEnd(`LOGGER->${action.type}`)
  return nextAction
}
