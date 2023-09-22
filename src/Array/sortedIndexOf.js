const sortedIndexOf = (arr, val) => {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = (left + right) >>> 1

        if (arr[mid] === val) {
            right = mid - 1
        } else if (arr[mid] > val) {
            right = mid - 1
        } else left = mid + 1
    }
    console.log(left)
    return left < arr.length && arr[left] === val ? left : -1
}

export default sortedIndexOf

console.log(sortedIndexOf([4, 7, 7, 7, 8], 7))

// => 1
