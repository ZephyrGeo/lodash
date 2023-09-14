const sortedIndexBy = (arr, value, iteratee) => {
    let left = 0
    let right = arr.length

    while (left < right) {
        const computed = iteratee(value)
        let mid = (left + right) >>> 1
        if (computed === iteratee(arr[mid])) return mid
        else if (iteratee(arr[mid]) > computed) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return left
}

// const objects = [{ x: 4 }, { x: 5 }, { x: 6 }]
// sortedIndexBy(objects, { x: 6 }, function (o) {
//     return o.x
// })
// => 0
