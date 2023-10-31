const defaults = (obj, ...sources) => {
    for (const source of sources) {
        for (const key in source) {
            if (!obj.hasOwnProperty(key)) {
                obj[key] = source[key]
            }
        }
    }
    return obj
}
export default defaults

// console.log(defaults({ a: 1 }, { b: 2 }, { a: 3 }))
// => { 'a': 1, 'b': 2 }
