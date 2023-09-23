const findIndex = (arr, predicate, fromIndex = 0) => {
    const length = arr.length

    for (let i = fromIndex; i < length; i++) {
        if (predicate(arr[i])) {
            return i
        }
    }
    return -1
}

// const users = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' },
// ]

// const index = findIndex(users, (user) => user.id === 2)
// console.log('Index:', index)

// => Output: Index: 1
