const unzip = (arr) => {
    const length = arr[0].length

    let result = []

    for (let i = 0; i < length; i++) {
        let unzip = []
        for (const x of arr) {
            unzip.push(x[i])
        }
        result.push(unzip)
    }
    return result
}

// unzip([['fred', 30, true],['barney', 40, false]])
// => [['fred', 'barney'], [30, 40], [true, false]]
