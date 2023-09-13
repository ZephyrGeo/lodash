const sortedIndex = (arr, val) => {
    // 二分查找
    let left = 0
    let right = arr.length

    while (left < right) {
        let mid = (left + right) >>> 1

        if (arr[mid] === val) return mid
        else if (arr[mid] > val) {
            right = mid - 1
        } else {
            left = mid + 1
            return left
        }
    }
}

const arr = [1, 3, 5, 7, 9, 11, 13]
const target = 0

const index = sortedIndex(arr, target)
console.log(index) // 输出: 2
