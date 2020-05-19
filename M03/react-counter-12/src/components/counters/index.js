'use strict'

import React from 'react'
import Counter from 'components/counter'

import { connect } from 'react-redux'
import { addCounter, removeCounter, increment, decrement } from 'reducers/counters/action-creator'

import './counters.css'

const Counters = ({ counters, addCounter, removeCounter, increment, decrement }) => (
  <div className='counters-container'>
    <h1>Counter's Redux</h1>
    <div className='counters'>
      {counters.map((counter, index) => (
        <Counter {...{
          key: index,
          counter,
          removeCounter: removeCounter(index),
          increment: increment(index),
          decrement: decrement(index)
        }} />
      ))}
    </div>

    <div className='btn-container'>
      <button className='btn' onClick={addCounter}>Adicionar Contador</button>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  counters: state
})

const mapDispatchToProps = (dispatch) => ({
  addCounter: () => dispatch(addCounter()),
  removeCounter: (index) => () => dispatch(removeCounter(index)),
  increment: (index) => () => dispatch(increment(index)),
  decrement: (index) => () => dispatch(decrement(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(Counters)
