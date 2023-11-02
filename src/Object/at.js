const at = (obj, paths) => {
    let res = []

    for (const path of paths) {
        const keys = path.replace(/\[(\w+)\]/g, '.$1').split('.')
        let value = obj

        for (const key of keys) {
            if (value) {
                value = value[key]
            } else value = undefined
        }
        res.push(value)
    }
    return res
}

const object = { a: [{ b: { c: 3 } }, 4] }

console.log(at(object, ['a[0].b.c', 'a[1]']))
// => [3, 4]
