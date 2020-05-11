const map = (arr = [], func = (item) => item) => {
    return (function mapInternal(arrayInternal, count) {
        const [head, ...tail] = arrayInternal

        return arrayInternal.length === 0 ? [] : [
            func(head, count, arr),
            ...mapInternal(tail, count + 1)
        ]
    })(arr, 0)
}

export default map

// ...[1, 2, 3]
// 1, 2, 3
// ...[[1, 2, 3]]
// [1, 2, 3]