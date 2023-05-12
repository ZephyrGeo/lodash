const sortedIndexOf = (arr, val) => {
    if (arr.length === 0) return -1
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === val) return i
    }
    return -1
}

export default sortedIndexOf
