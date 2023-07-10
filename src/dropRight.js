import slice from './slice.js'

const dropRight = (arr, n = 1) => {
    const length = arr == null ? 0 : arr.length
    return slice(arr, 0, length - n)
}

export default dropRight

const arr = [1, 2, 3]
console.log(dropRight([1, 2, 3]))
console.log(dropRight([1, 2, 3], 2))
console.log(dropRight([1, 2, 3], 5))
console.log(dropRight([1, 2, 3], 0))
