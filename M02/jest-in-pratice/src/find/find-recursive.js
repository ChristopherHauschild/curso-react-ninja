const find = (arr, func) => {
    // for(let i = 0; i < arr.length; i++) {
    //     if(func(arr[i], i, arr)) {
    //         return arr[i]
    //     }
    // }

    return (function findInternal(arrInternal, count) {
        // pegando head e tail do array interno
        const [head, ...tail] = arrInternal

        return arrInternal.length === 0
        ? undefined 
        // func passada pelo usuário pegando o item, o indice e o array
        // não pode ser array interno pois se modifica a cada iteração
        : func(head, count, arr)
            ? head
            // retorna restante do array para ser iterado, caso head(item atual) for falso
            : findInternal(tail, count+ 1)

    })(arr, 0)
}

export default find