const join = (arr, separator) => {
    const length = arr == null ? 0 : arr.length

    let res = ''
    for (let i = 0; i < length; i++) {
        i == length - 1 ? (res += arr[i]) : (res += arr[i] + separator)
    }
    return res
}
export default join
