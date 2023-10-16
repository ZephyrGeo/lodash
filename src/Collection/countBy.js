const countBy = (collection, iteratee) => {
    const length = collection.length

    const result = {}

    for (let i = 0; i < length; i++) {
        const key = iteratee(collection[i])
        if (result[key]) {
            result[key] += 1
        } else result[key] = 1
    }
    return result
}

// countBy([6.1, 4.2, 6.3, 6.4, 7], Math.floor)
// => { '4': 1, '6': 3, '7': 1 }
