const uniqBy = (arr, iteratee) => {
    const set = new Set(arr.map((item) => iteratee(item)))
    return arr.filter((item) => set.has(iteratee(item)))
}

// uniqBy([2.1, 1.2, 2.3], Math.floor)
// => [2.1, 1.2]
