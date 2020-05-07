const sum = require('./sum')

console.assert(
    typeof sum === 'function', 'should sum is a function'
)

console.assert(
    sum(1, 2) === 3,
    'should sum(1, 2) return 3'
)

console.assert(
    sum(3, 2) === 5,
    'should sum(3, 2) return 5'
)

console.log('All tests passed!')
