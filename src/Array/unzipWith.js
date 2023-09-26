const unzipWith = (arr, iteratee) => {
    const length = arr[0].length

    let result = []

    for (let i = 0; i < length; i++) {
        let unzip = arr.map((arr) => arr[i])
        const iterateeResult = iteratee(...unzip)
        result.push(iterateeResult)
    }
    return result
}
