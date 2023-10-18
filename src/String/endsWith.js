const endsWith = (string = '', target, position = string.length) => {
    position = position < string.length ? position : string.length
    // const new_string = string.slice(0, position)

    // const new_str_len = new_string.length
    // const tar_len = target.length

    // // 从后向前比较
    // for (let i = tar_len - 1; i >= 0; i--) {
    //     if (target[i] !== new_string[i + new_str_len - tar_len]) return false
    // }
    // return true

    const stringToCheck = string.slice(position - target.length, position)

    return stringToCheck === target
}

export default endsWith

console.log(endsWith('abc', 'c')) // => true
console.log(endsWith('abc', 'a')) // => false
console.log(endsWith('abc', 'b', 2)) // => true
console.log(endsWith('abc', 'bc', 2)) // => false
console.log(endsWith('abc', 'ab', 2)) // => true
console.log(endsWith('abc', 'ab', 3)) // => false
