import baseFlatten from './baseflatten.js'
const flatten = (arr) => {
    const length = arr == null ? 0 : arr.length

    return length ? baseFlatten(arr, 1) : []
}

export default flatten

const arr = [1, 2, 3, [[4]]]

console.log(flatten(arr))
