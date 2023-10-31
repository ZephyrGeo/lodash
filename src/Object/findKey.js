const findKey = (obj, pred) => {
    if (typeof pred === 'string') {
        return findKey(obj, (el) => el[pred])
    }
    if (Array.isArray(pred)) {
        const res = Object.fromEntries(pred)
        return findKey(obj, res)
    }
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && pred(obj[key])) {
            return key
        }
    }
    return false
}

const users = {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true },
}

console.log(
    findKey(users, function (o) {
        return o.age < 40
    })
)

console.log(findKey(users, ['active', false]))

console.log(findKey(users, 'active'))

const arr = [1, 23]
console.log(Array.isArray(arr))
