const trimStart = (string = '', chars = ' ') => {
    let resIndex = 0

    while (resIndex < string.length && chars.includes(string[resIndex])) {
        resIndex++
    }

    return string.substring(resIndex)
}

export default trimStart

console.log(trimStart('  abc  '))
// => 'abc  '

console.log(trimStart('-_-abc-_-', '_-'))
// => 'abc-_-'
