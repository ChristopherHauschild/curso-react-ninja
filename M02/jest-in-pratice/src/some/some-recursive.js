const some = (arr, func) => {
    return (function someInternal(arrayInternal, count) {
        const [head, ...tail] = arrayInternal

        return arrayInternal.length === 0
        ? false : func(head, count, arr)
        ? true : someInternal(tail, count + 1)
    })(arr, 0)
}

export default some