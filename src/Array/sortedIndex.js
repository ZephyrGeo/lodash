const sortedIndex = (arr, val) => {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = (left + right) >>> 1

        arr[mid] < val ? (right = mid - 1) : (left = mid + 1)
    }
    return left
}

export default sortedIndex

// sortedIndex([30, 50], 40)
// => 1

// sortedIndex([30,40,50], 40)
// => 1
