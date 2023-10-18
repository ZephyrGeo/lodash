const repeat = (string = '', n = 1) => {
    let repeatStr = ''
    for (let i = 0; i < n; i++) {
        repeatStr += string
    }
    return repeatStr
}

export default repeat

// console.log(repeat('abc', 3))
// => abcabcabc
