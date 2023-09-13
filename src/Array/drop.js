import slice from './slice.js'

const drop = (arr, n = 1) => {
    const length = arr == null ? 0 : arr.length

    return length ? slice(arr, n, length) : 0
}

export default drop
