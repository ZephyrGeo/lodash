import slice from './slice.js'

const concat = (arr, values) => {
    const result = slice(arr)
    result.push(...values)
    return result
}

export default concat
