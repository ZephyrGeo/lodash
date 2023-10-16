const max = (array) => {
    if (!array) return []

    const new_arr = array.sort()
    return new_arr[new_arr.length - 1]
}
export default max

console.log(max([4, 2, 8, 6]))
