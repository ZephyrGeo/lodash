const intersectionBy = (...arrsAndIteratee) => {
    const iteratee = arrsAndIteratee.pop()

    const result = []
    const baseArray = arrsAndIteratee[0]
    const comparedArrays = arrsAndIteratee.slice(1)

    for (const el of baseArray) {
        const transformedValue = iteratee(el)
        // 比较

        if (comparedArrays.every((arr) => arr.some((el) => iteratee(el) === transformedValue))) result.push(el)

        // for (const arr of comparedArrays) {
        //     const temp = arr.map((item) => iteratee(item))
        //     if (temp.includes(iteratee(el))) {
        //         result.push(el)
        //     }
        // }
    }
    return result
}

// console.log(intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor))
// => [2.1]
