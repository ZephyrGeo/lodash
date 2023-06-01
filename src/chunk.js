import slice from './slice'

const chunk = (arr, size) => {
    const res = []
    for (let i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size))
    }
    return res
}

export default chunk
