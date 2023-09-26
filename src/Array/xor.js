import concat from './concat.js'

const xor = (...arrs) => {
    let result = []
    const allValues = arrs.reduce((acc, arr) => acc.concat(arr), [])
    let valueCount = {}

    for (const value of allValues) {
        if (valueCount[value]) {
            valueCount[value]++
        } else {
            valueCount[value] = 1
        }
    }

    for (const value in valueCount) {
        if (valueCount[value] === 1) {
            result.push(Number(value))
        }
    }
    return result
}
console.log(xor([2, 1], [2, 3], [3, 2]))
