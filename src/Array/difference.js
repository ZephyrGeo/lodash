const difference = (arr, val) => {
    return arr.filter((item) => !val.includes(item))
}

export default difference

// difference([3, 2, 1], [4, 2])
// => [3,1]
