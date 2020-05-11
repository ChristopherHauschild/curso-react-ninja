const every = (arr, func) => {
    return (function everyInternal(arrayInternal, count) {
        const [head, ...tail] = arrayInternal

        return arrayInternal.length === 0
            ? true 
            : !func(head, count, arr)
                ? false 
                : everyInternal(tail, count + 1)
    })(arr, 0)
}

export default every