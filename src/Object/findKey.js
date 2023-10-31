const findKey = (obj, pred) => {
    if (Array.isArray(pred)) {
        for (const key in obj) {
            // barney , { 'age': 36, 'active': true }
            for (const name in obj[key]) {
                if (name === pred[0] && obj[key][name] === pred[1]) {
                    return key
                }
            }
        }
        return false
    }

    if (typeof pred === 'string') {
        return findKey(obj, (el) => el[pred])
    }

    if (typeof pred === 'object') {
        for (const key in obj) {
            // console.log(key, obj[key], pred)
            if (JSON.stringify(obj[key]) === JSON.stringify(pred)) return key
        }
        return false
    }

    for (const key in obj) {
        if (obj.hasOwnProperty(key) && pred(obj[key])) {
            return key
        }
    }
    return false
}

// const users = {
//     barney: { age: 36, active: true },
//     fred: { age: 40, active: false },
//     pebbles: { age: 1, active: true },
// }

// console.log(
//     findKey(users, function (o) {
//         return o.age < 40
//     })
// )
// 'barney'

// console.log(findKey(users, { age: 1, active: true }))
// => 'pebbles'

// console.log(findKey(users, ['active', false]))
// => 'fred'

// console.log(findKey(users, 'active'))
// => 'barney'
