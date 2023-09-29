const sortedLastIndex = (array, value) => {
    let left = 0
    let right = array.length - 1

    while (left <= right) {
        let mid = (left + right) >>> 1

        array[mid] > value ? (right = mid - 1) : (left = mid + 1)
    }
    return left
}

export default sortedLastIndex

// console.log(sortedLastIndex([30, 40, 50], 20))
// => 0
// console.log(sortedLastIndex([30, 40, 50], 30))
// => 1
// console.log(sortedLastIndex([30, 40, 50], 40))
// => 2
// console.log(sortedLastIndex([30, 40, 50], 50))
// => 3
