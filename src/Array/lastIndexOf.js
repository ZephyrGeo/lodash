const lastIndexOf = (array, value, fromIndex = array.length - 1) => {
    console.log(fromIndex)
    for (let i = fromIndex; i >= 0; i--) {
        if (array[i] === value) return i
    }
    return -1
}

// console.log(lastIndexOf([2, 2, 1], 2))
// => 1
