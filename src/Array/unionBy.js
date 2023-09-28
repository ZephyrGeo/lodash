const unionBy = (...arraysAndIteratee) => {
    const iteratee = arraysAndIteratee.pop()
    const arrays = arraysAndIteratee
    const set = new Set()
    const result = []

    for (const array of arrays) {
        for (const el of array) {
            if (!set.has(iteratee(el))) {
                set.add(iteratee(el))
                result.push(el)
            }
        }
    }
    return result
}

// console.log(unionBy([2.1], [1.2, 2.3], Math.floor))
// => [2.1, 1.2]
