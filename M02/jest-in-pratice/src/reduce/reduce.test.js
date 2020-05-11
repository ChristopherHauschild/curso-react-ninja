import { expect } from 'chai'
import reduceRight from './reduce-right'
import reduce from './reduce'

it('reduce should be a function', () => {
    expect(reduce).to.be.a('function')
})

it('reduce([1, 2, 3], (acc, item) => acc + item, 0) should return 6', () =>{
    const before = reduce([1, 2, 3], (acc, item) => acc + item, 0)
    expect(before).to.be.deep.equal(6)
})

it('reduce([2, 3, 4], (acc, item) => acc + item, 0) should return 9', () => {
    const before = reduce([2, 3, 4], (acc, item) => acc + item, 0)
    expect(before).to.be.deep.equal(9)
})

it('reduce([1, 2], (acc, item) => { acc["number " + item] = item; return acc }, {}), should return {"number 1": 1, "number 2": 2}', () => {
    const before = reduce([1, 2], (acc, item) => { acc["number " + item] = item; return acc }, {})
    const after = {"number 1": 1, "number 2": 2}
    expect(before).to.be.deep.equal(after)
})

it('reduce([2, 3, 4], (acc, item) => acc + item), should return 9 ', () => {
    const before = reduce([2, 3, 4], (acc, item) => acc + item)
    expect(before).to.be.deep.equal(9)
})

it('reduce([1, 2], (acc, item, index, array) => acc + array[index], 0), should return 3', () => {
    const before = reduce([1, 2], (acc, item, index, array) => acc + array[index], 0)
    expect(before).to.be.deep.equal(3)
})

it('reduceRight(["pher", "to", "Chris"], (acc, item) => acc + item, "") should return "Christopher"', () => {
    const before = reduceRight(["pher", "to", "Chris"], (acc, item) => acc + item, "")
    const after = 'Christopher'
    expect(before).to.be.deep.equal(after)
})