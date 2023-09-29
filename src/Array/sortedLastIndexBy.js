const sortedLastIndexBy = (array, value, iteratee) => {
    let left = 0
    let right = array.length - 1

    while (left <= right) {
        let mid = (left + right) >>> 1
        const transformedValue = iteratee(value)
        const transformedElement = iteratee(array[mid])

        transformedElement > transformedValue ? (right = mid - 1) : (left = mid + 1)
    }
    return left
}

export default sortedLastIndexBy
