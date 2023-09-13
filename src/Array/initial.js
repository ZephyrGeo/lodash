import slice from './slice.js'

const initial = (arr) => {
    const length = arr.length
    return slice(arr, 0, length - 1)
}

export default initial
