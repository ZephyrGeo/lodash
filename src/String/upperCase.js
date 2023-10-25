const upperCase = (string = '') => {
    return string
        .split(/[\s_\-]+/)
        .filter((word) => word)
        .flatMap((word) => word.split(/(?=[A-Z])/))
        .map((word) => word.toUpperCase())
        .join(' ')
}

export default upperCase
// console.log(upperCase('-foo-BarAcV-'))
// => 'FOO BAR AC V'
