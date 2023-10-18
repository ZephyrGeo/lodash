const kebabCase = (string = '') => {
    const words = string
        .split(/[\s_\-]+/)
        .filter((word) => word)
        .map((word) => word.toLowerCase())

    return words.join('-')
}

export default kebabCase

// console.log(kebabCase('__FOO_BAR__'))
// => 'foo-bar'
