const flattenNew = (arr) => {
    let result = []

    for (const e of arr) {
        if (e instanceof Array) {
            result.push(...e)
        } else {
            result.push(e)
        }
    }
    return result
}
