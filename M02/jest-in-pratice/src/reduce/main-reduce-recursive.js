const isInitialValueUndefinided = (initialValue) => initialValue === undefined

const mainReduce = (arr, func, initialValue) => {
    const acc = isInitialValueUndefinided(initialValue) ? arr[0]: initialValue
    const arrCopy = isInitialValueUndefinided(initialValue) ? arr.slice(1) : arr

    return(function mainReduceInternal(accInternal, arrInternal, count) {
        const [head, ...tail] = arrInternal
        const accNext = () => func(accInternal, head, count, arrCopy)

        return arrInternal.length === 0
            ? accInternal
            : mainReduceInternal(accNext(), tail, count + 1)
    })(acc, arrCopy, 0)
}

export default mainReduce