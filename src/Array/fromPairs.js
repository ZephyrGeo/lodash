const fromPairs = (pairs) => {
    const result = {}
    for (const pair of pairs) {
        const [key, value] = pair
        result[key] = value
    }
    return result
}

export default fromPairs
// console.log(fromPairs([['fred', 30],['barney', 40],]))
// => { 'fred': 30, 'barney': 40 }
