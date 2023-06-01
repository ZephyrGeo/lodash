const compact = (arr) => {
    let res = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0 || false || NaN || '') {
            res.push(arr[i])
        }
    }

    return res
}

export default compact
