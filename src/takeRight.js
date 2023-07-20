import slice from './slice.js'

const takeRight = (arr, val = 1) => {
    const length = arr.length
    let result = []

    val = length - val
    return (result = slice(arr, val < 0 ? 0 : val, length))
}

export default takeRight
