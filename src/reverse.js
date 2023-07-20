const reverse = (arr) => {
    const length = arr == null ? 0 : arr.length

    for (let i = 0; i < Math.floor((length - 1) / 2); i++) {
        let tmp = arr[i]

        arr[i] = arr[length - 1 - i]

        arr[length - 1 - i] = tmp
    }
    return arr
}
