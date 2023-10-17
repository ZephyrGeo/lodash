const camelCase = (string = '') => {
    const words = string.split(/[\s_\-]+/).filter((word) => word)

    const camelCaseString = words
        .map((word, i) => {
            if (i === 0) {
                return word.toLowerCase()
            } else {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            }
        })
        .join('')

    return camelCaseString
}

export default camelCase

console.log(camelCase('--fOo-bar--'))
