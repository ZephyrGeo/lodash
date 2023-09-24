const without = (arr, ...vals) => {
    const set = new Set(vals)
    return arr.filter((item) => !set.has(item))
}

// without([2, 1, 2, 3], 1, 2)
// => [3]
