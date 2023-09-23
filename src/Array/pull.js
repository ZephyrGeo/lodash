const pull = (arr, ...val) => {
    for (let i = 0; i < val.length; i++) {
        arr = arr.filter((item) => item !== val[i])
    }
    return arr
}

// pull([1, 2, 3, 1, 2, 3], 2, 3)
// => [1,1]
