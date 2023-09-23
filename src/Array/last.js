const last = (arr) => {
    const length = arr ? arr.length - 1 : null

    return arr[length]
}

export default last

// console.log(last([1, 2, 3]))
// => 3
