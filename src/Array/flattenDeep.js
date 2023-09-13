import baseFlatten from './baseflatten.js'

const flattenDeep = (arr) => {
    const length = arr === null ? 0 : arr.length

    return length ? flattenDeep(arr) : []
}

export default baseFlatten
