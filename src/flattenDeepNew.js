const flattenDeepNew = (arr) => {
    let result = []

    for (const e of arr) {
        if (e instanceof Array) {
            result.push(...flattenDeepNew(e))
        } else {
            result.push(e)
        }
    }
    return result
}

const arr = [1, [[2]], 3]
console.log(flattenDeepNew(arr))
