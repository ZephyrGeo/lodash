const flattenDepthNew = (arr, depth) => {
    let result = []

    for (const e of arr) {
        if (depth > 0 && e instanceof Array) {
            result.push(...flattenDepthNew(e, depth - 1))
        } else {
            result.push(e)
        }
    }
    return result
}

const arr = [1, [[2]], 3]
console.log(flattenDepthNew(arr, 2))
