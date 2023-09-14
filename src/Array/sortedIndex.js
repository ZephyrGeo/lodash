const sortedIndex = (arr, val) => {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        let mid = (left + right) >>> 1

        if (arr[mid] === val) return mid
        else if (arr[mid] > val) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return left
}

export default sortedIndex

// sortedIndex([30, 50], 40)
// => 1
