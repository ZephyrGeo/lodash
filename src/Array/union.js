const union = (...arrs) => {
    let res = []

    for (const arr of arrs) {
        for (const item of arr) {
            if (!res.includes(item)) res.push(item)
        }
    }
    return res
}

// union([2], [1, 2]))
// => [2,1]
