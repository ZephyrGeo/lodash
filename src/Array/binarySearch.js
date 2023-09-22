const binarySearch = (arr, value) => {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = (left + right) >>> 1

        if (value < arr[mid]) {
            right = mid - 1
        } else if (value > arr[mid]) {
            left = mid + 1
        } else return mid
    }
    return -1
}

console.log(binarySearch([4, 5, 6, 7, 8], 5))
