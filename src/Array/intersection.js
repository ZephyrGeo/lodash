const intersection = (...arr) => {
    const baseArray = arr[0]

    const result = baseArray.filter((item) => {
        return arr.every((arr) => arr.includes(item))
    })
    return result
}

console.log(intersection([2, 1, 3], [4, 2, 3], [2, 5, 3]))
