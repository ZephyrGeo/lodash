const fill = (arr, val, start = 0, end = arr.length) => {
    while (start < end) {
        arr[start++] = val
    }
    return arr
}

export default fill
