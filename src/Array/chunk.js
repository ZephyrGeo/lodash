import slice from './slice.js'

const chunk = (arr, size = 1) => {
    // size = Math.max(toInteger(size), 0)
    const length = arr == null ? 0 : arr.length
    if (!length || size < 1) {
        return []
    }

    // own writing
    // let res = []
    // for (let i = 0; i < length; i += size) {
    //     res.push(slice(arr, i, i + size))
    // }

    // standard writing
    let index = 0
    let resIndex = 0
    const res = new Array(Math.ceil(length / size))

    while (index < length) {
        res[resIndex++] = slice(arr, index, (index += size))
    }
    return res
}

export default chunk

const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(chunk(arr, 3))
