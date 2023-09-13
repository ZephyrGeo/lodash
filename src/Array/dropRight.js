import slice from './slice.js'

const dropRight = (arr, n = 1) => {
    const length = arr == null ? 0 : arr.length
    n = Math.ceil(length - n)
    return length ? slice(arr, 0, n < 0 ? 0 : n) : []
}

export default dropRight
