'use strict'

import { combineReducers } from 'redux'
import address from './address'
import todos from './todos'
import visibilityFilter from './visibility-filter'

// const rootReducer = (state = {}, action) => {
//   return {
//     todos: reducerTodos(state.todos, action),
//     visibilityFilter: reducerVisibilityFilter(state.visibilityFilter, action)
//   }
// }

export default combineReducers({
  address,
  todos,
  visibilityFilter
})
