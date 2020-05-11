import { expect } from 'chai'
import some from './some-recursive'

it('some should be a function', () => {
    expect(some).to.be.a('function')
})

it('some([], (item) => item) should returne false', () => {
    expect(some([], (item) => item)).to.not.be.ok
})

it('some([1, 2], (item) => item) should return true', () => {
    expect(some([1, 2], (item) => item)).to.be.ok
})

it('some([1, 2, 3], (item, index) => index % 2) should return true', () => {
    expect(some([1, 2, 3], (item, index) => index % 2)).to.be.ok
})

it('some([1, 3, 5], (item) => item % 2 === 0) should return false', () => {
    expect(some([1, 3, 5], (item) => item % 2 === 0)).to.not.be.ok
})

it('some([1, 2, 3], (item, index, array) => array.indexOf(2) === 1) should return true', () => {
    expect(some([1, 2, 3], (item, index, array) => array.indexOf(2) === 1)).to.be.ok
})