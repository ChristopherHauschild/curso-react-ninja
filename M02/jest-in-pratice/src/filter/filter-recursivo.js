const filter = (arr, func) => {
    return (function filterInternal(arrayInternal, count) {
        const [head, ...tail] = arrayInternal

        return arrayInternal.length === 0 ? [] :
        (func(head, count, arr) ? [head] : 
        []).concat(filterInternal(tail, count + 1)) 
    })(arr, 0)
}

export default filter