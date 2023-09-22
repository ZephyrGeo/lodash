const sortedLastIndexOf = (arr, value) => {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = (left + right) >>> 1

        if (arr[mid] > value) {
            right = mid - 1
        } else if (arr[mid] < value) {
            left = mid + 1
        } else {
            left = mid + 1
        }
    }

    return right < arr.length && arr[right] === value ? right : -1
}

export default sortedLastIndexOf

console.log(sortedLastIndexOf([4, 7, 7, 7, 8], 7))

// => 3
