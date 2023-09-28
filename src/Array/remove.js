import pull from './pull.js'
const remove = (arr, predicate) => {
    const values = arr.filter((item) => !predicate(item))

    return pull(arr, ...values)
}

export default remove

console.log(
    remove([1, 2, 3, 4], function (n) {
        return n % 2 == 0
    })
)
