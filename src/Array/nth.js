const nth = (arr, n = 0) => {
    const length = arr.length

    n = n > 0 ? n : length + n

    return arr[n]
}

export default nth

// const array = ['a', 'b', 'c', 'd']

// console.log(nth(array, -1))
// => d
// console.log(nth(array, 3))
// => d
