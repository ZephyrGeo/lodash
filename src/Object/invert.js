const invert = (obj) => {
    const entries = Object.entries(obj).map((arr) => {
        let tmp = arr[0]
        arr[0] = arr[1]
        arr[1] = tmp
        return arr
    })
    return Object.fromEntries(entries)
}
export default invert

// console.log(invert({ a: 1, b: 2, c: 1 }))
// => { '1': 'c', '2': 'b' }
