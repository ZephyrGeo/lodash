const compact = (arr) => {
    let res = []
    if (arr.length == 0) return []

    let resIndex = 0
    for (const value of arr) {
        if (value) res[resIndex++] = value
    }
    return res
}

export default compact1
