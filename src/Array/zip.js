const zip = (...arrs) => {
    const length = arrs[0].length

    let result = []
    for (let i = 0; i < length; i++) {
        let zip = []
        for (const arr of arrs) {
            zip.push(arr[i])
        }
        result.push(zip)
    }
    return result
}

// zip(['fred', 'barney'], [30, 40], [true, false])
// => [ [ 'fred', 30, true ], [ 'barney', 40, false ] ]
