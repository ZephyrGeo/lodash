import slice from './slice.js'
const tail = (arr) => {
    let result = slice(arr, 1)
    return result
}

export default tail

const arr = [1, 2, 3, 4]

console.log(tail(arr))
