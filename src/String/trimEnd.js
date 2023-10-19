const trimEnd = (string = '', chars = ' ') => {
    let resIndex = string.length - 1

    while (resIndex > 0 && chars.includes(string[resIndex])) {
        resIndex--
    }

    return string.substring(0, resIndex + 1)
}

export default trimEnd

console.log(trimEnd('  abc  '))
// => '  abc'

console.log(trimEnd('-_-abc-_-', '_-'))
// => '-_-abc'
