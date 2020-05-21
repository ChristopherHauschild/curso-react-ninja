'use strict'

import * as actions from './actions'
import { v4 } from 'uuid'

export const addTodo = (text) => ({
  type: actions.ADD_TODO,
  payload: {
    id: v4(),
    text
  }
})

export const toggleTodo = (id) => ({
  type: actions.TOGGLE_TODO,
  payload: { id }
})
