const trim = (string = '', chars = ' ') => {
    let resIndex = 0

    // trim start
    while (resIndex < string.length && chars.includes(string[resIndex])) {
        resIndex++
    }

    let trimStr = string.substring(resIndex)
    // console.log(trimStr)

    // trim end
    let newIndex = trimStr.length - 1
    while (newIndex > 0 && chars.includes(trimStr[newIndex])) {
        newIndex--
    }

    return trimStr.substring(0, newIndex + 1)
}

export default trim

console.log(trim('-_-abc-_-', '_-'))
console.log(trim('  abc     '))
