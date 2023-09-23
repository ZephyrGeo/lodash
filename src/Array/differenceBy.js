const differenceBy = (arr, val, iteratee) => {
    const set = new Set(val.map((item) => iteratee(item)))

    return arr.filter((item) => !set.has(iteratee(item)))
}

export default differenceBy

console.log(differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor))

// => [3.1, 1.3]

// console.log(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x'))
