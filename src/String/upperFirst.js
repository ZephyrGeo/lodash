const upperFirst = (str = '') => {
    if (str === '') return

    const firstLetter = str[0]
    const upperCaseFirstLetter = firstLetter.toUpperCase()

    if (firstLetter === upperCaseFirstLetter) return str
    else return str[0].toUpperCase() + str.slice(1)
}

// console.log(upperFirst('fred'))
// => 'Fred'
