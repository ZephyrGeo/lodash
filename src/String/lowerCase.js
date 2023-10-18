const lowerCase = (string = '') => {
    return string
        .split(/[\s_\-]+/)
        .filter((word) => word)
        .map((word) => word.toLowerCase())
        .join(' ')
}

// console.log(lowerCase('__FOO_BAR__'))
// => 'foo bar'
