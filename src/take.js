import slice from './slice.js'

const take = (arr, val = 1) => {
    const length = arr.length
    let result = []

    return (result = slice(arr, 0, val > length ? length : val))
}

export default take
