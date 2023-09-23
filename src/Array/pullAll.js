const pullAll = (arr, values) => {
    const set = new Set(values)
    return (arr = arr.filter((item) => !set.has(item)))
}

// pullAll([1, 2, 3, 1, 2, 3],  [2, 3])
// => [1,1]
