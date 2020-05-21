'use strict'

import React from 'react'
import { connect } from 'react-redux'
import * as actions from 'reducers/visibility-filter/actions'
import { setVisibilityFilter } from 'reducers/visibility-filter/action-creators'
import FilterLink from './filter-link'

import './filter.css'

const Filter = ({ activeFilter, handleFilter }) => (
  <div className='filter-container'>
    <h3>Mostrar</h3>
    <div className='filter-items'>
      {filterItems.map((item) => (
        <FilterLink
          key={item.action}
          action={item.action}
          activeFilter={activeFilter}
          onClick={handleFilter(item.action)}
        > {item.label} </FilterLink>
      ))}
    </div>
  </div>
)

const filterItems = [
  { label: 'Todos', action: actions.SHOW_ALL },
  { label: 'Finalizados', action: actions.SHOW_COMPLETED },
  { label: 'A fazer', action: actions.SHOW_ACTIVE }
]
// ['Todos', 'Finalizado', 'A fazer']

const mapStateToProps = (state) => ({
  activeFilter: state.visibilityFilter
})

const mapDispatchToProps = (dispatch) => ({
  handleFilter: (filter) => (e) => {
    e.preventDefault()
    dispatch(setVisibilityFilter(filter))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
