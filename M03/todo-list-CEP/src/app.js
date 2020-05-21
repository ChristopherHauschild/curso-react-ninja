'use strict'

import React from 'react'

import Form from 'components/form'
import TodosList from 'components/todos-list'
import Filter from 'components/filter'
import SearchCep from 'components/search-cep'

import './css/style.css'

const App = () => (
  <div>
    <div>
      <h1 className='todo-list'>Todo List</h1>
      <Form />
      <TodosList />
      <Filter />
    </div>

    <div className='table-content'>
      <h1 className='search-cep'>Search Cep</h1>
      <SearchCep />
    </div>
  </div>
)

export default App
