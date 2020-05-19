'use strict'

const counter = (state = 0, action) => {
  
  switch (action.type) {
    case 'INCREMENT' : return state + 1
    case 'DECREMENT' : return state - 1
  }

  return state
}

// Store -> objeto principal onde estado principal da aplicação fica armazenado
const { createStore } = Redux
const store = createStore(counter)

// getState()  -> retorna estado atual da aplicação
// dispatch()  -> dispara uma ação
// subscribe() -> assiste toda vez que uma ação é executada

store.subscribe(() => {
  console.log('Disparou uma ação! State = ', store.getState())
})

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })

store.dispatch({ type: 'DECREMENT' })
