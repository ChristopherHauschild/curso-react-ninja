const reverse = (arr) => {
    let newArray = []
    // Quando chega a 0 (false) encerra
    for(let i = arr.length; i--;){
        newArray.push(arr[i])
    }

    return newArray
}

export default reverse