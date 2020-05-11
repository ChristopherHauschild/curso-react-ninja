const sum = (arr) => {
    if(arr.length === 0)
        return 0

    const [head, ...tail] = arr
    return head + sum(tail)
}

console.log(sum([1, 2, 3]))

// return arr[0] + sum(arr.slice(1))
// sum([1, 2, 3])
// 1 + sum([2, 3])
// 1 + 2 + sum([3])
// 1 + 2 + 3 + sum([])
// 1 + 2 + 3 + 0