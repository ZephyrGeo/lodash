const indexOf = (arr, value, fromIndex = 0) => {
    const length = arr == null ? 0 : arr.length
    fromIndex = fromIndex < 0 ? length + fromIndex : fromIndex

    for (let i = fromIndex; i < length; i++) {
        if (arr[i] === value) return i
    }
    return -1
}

export default indexOf
