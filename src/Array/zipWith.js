const zipWith = (...arrsAndFunc) => {
    const func = arrsAndFunc.pop()
    const length = arrsAndFunc[0].length

    const result = []
    for (let i = 0; i < length; i++) {
        const args = arrsAndFunc.map((arr) => arr[i])

        const value = func(...args)
        result.push(value)
    }
    return result
}
// console.log(
//     zipWith([1, 2], [10, 20], [100, 200], function (a, b, c) {
//         return a + b + c
//     })
// )
// => [111,222]
