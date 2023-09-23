const findLastIndex = (arr, predicate, fromIndex = arr.length - 1) => {
    for (let i = fromIndex; i > 0; i--) {
        if (predicate(arr[i])) {
            return i
        }
    }
    return -1
}

export default findLastIndex

// const users = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 2, name: 'Sara' },
//     { id: 3, name: 'Charlie' },
// ]

// const index = findLastIndex(users, (user) => user.id === 2)
// console.log('Index:', index)

// => Output: Index: 2
