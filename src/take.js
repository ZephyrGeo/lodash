import slice from './slice.js'

const take = (arr, val = 1) => {
    let result = []

    if (val > arr.length) {
        result = slice(arr, 0)
    } else if (val == 0) {
        result = slice(arr.length)
    } else {
        result = slice(arr, 0, val)
    }

    return result
}

export default take
