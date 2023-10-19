const snakeCase = (string = '') => {
    const words = string.split(/[\s_\-]+/).filter((word) => word)

    const snakeCaseStr = words.map((word) => word.toLowerCase()).join('_')

    return snakeCaseStr
}

// console.log(snakeCase('Foo Bar'))
// => 'foo_bar'
