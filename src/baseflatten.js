const baseFlatten = (arr, depth, predicate, isStrict, result) => {
    const spreadableSymbol = Symbol.isConcatSpreadable
    function isFlattenable(val) {
        return Array.isArray(val) || !!(val && val[spreadableSymbol])
    }

    predicate || (predicate = isFlattenable)
    result || (result = [])

    if (arr == null) return result

    for (const val of arr) {
        if (depth > 0 && predicate(val)) {
            if (depth > 1) {
                baseFlatten(val, depth - 1, predicate, isStrict, result)
            } else {
                result.push(...val)
            }
        } else if (!isStrict) {
            result[result.length] = val
        }
    }
    return result
}

export default baseFlatten
