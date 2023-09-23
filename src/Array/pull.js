const pull = (arr, ...val) => {
    for (let i = 0; i < val.length; i++) {
        arr = arr.filter((item) => item !== val[i])
    }
    return arr
}

const pullSetFunction = (arr, ...val) => {
    const set = new Set(val)

    return (arr = arr.filter((item) => !set.has(item)))
}

// pull([1, 2, 3, 1, 2, 3], 2, 3)
// => [1,1]
