'use strict'

import React from 'react'

import './counter.css'

const Counter = ({ counter, increment, decrement, removeCounter }) => (
  <div className='counter'>
    <h1>{counter}</h1>
    <button className='dec-button' onClick={decrement}>-</button>
    <button className='inc-button' onClick={increment}>+</button>
    <button className='remove-button'
      onClick={removeCounter}>
      &times;
    </button>
  </div>
)

export default Counter
