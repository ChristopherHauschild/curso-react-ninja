const filter = (arr, func) => {
    let newArr = []

    for(let i = 0; i < arr.legth; i++) {
        if(func(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }

    return newArr
}

export default filter