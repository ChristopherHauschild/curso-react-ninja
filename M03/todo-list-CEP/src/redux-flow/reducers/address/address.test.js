'use strict'

import address from './index'
import deepFreeze from 'deep-freeze'
import { expect } from 'chai'
import { SUCCESS } from './actions'

it('should action SUCCESS update address', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 200,
    isFetching: true
  })
  const action = deepFreeze({
    type: SUCCESS,
    payload: {
      address: 'Avenida Presidente Kennedy - de 1632',
      city: 'Curitiba',
      code: '80610010',
      district: 'Água Verde',
      state: 'PR',
      status: 200
    }
  })
  const after = {
    address: 'Avenida Presidente Kennedy - de 1632',
    city: 'Curitiba',
    code: '80610010',
    district: 'Água Verde',
    state: 'PR',
    status: 200,
    isFetching: false
  }
  expect(address(before, action)).to.be.deep.equal(after)
})
