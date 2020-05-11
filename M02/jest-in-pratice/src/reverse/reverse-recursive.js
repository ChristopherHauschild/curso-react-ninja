const reverse = (arr) => {
    return arr.length === 0 ? [] :
        [
        arr.slice(-1)[0],
        ...reverse(arr.slice(0, -1))
        ]
    // Pega o último número e concatena com chamada recursiva
    // do restante do array, menos o último indice
}

export default reverse