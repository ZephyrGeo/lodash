const replace = (string = '', pattern, replacement) => {
    return string.split(pattern).join(replacement)
}

console.log(replace('Hi Fred, Fred is ?', 'Fred', 'Barney'))
