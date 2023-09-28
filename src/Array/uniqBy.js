const uniqBy = (arr, iteratee) => {
    const set = new Set()
    const result = []
    for (const el of arr) {
        const newEl = iteratee(el)
        if (!set.has(newEl)) {
            result.push(el)
            set.add(newEl)
        }
    }
    return result
}

// console.log(uniqBy([2.1, 1.2, 2.3], Math.floor))
// => [2.1, 1.2]
