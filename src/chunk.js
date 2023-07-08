import slice from './slice.js'

const chunk = (arr, size = 1) => {
    const length = arr == null ? 0 : arr.length
    if (!length || size < 1) {
        return []
    }

    let res = []

    for (let i = 0; i < arr.length; i + size) {
        res.push(slice(arr, i, size))
    }

    return res
}

export default chunk

const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(chunk(arr, 4))
