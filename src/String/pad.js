const pad = (string = '', length = 0, chars = ' ') => {
    if (string.length >= length) {
        return string
    }

    const paddingLength = length - string.length
    const leftPaddingLength = Math.floor(paddingLength / 2)
    const rightPaddingLength = Math.ceil(paddingLength / 2)

    const leftPadding = chars.repeat(leftPaddingLength)
    const rightPadding = chars.repeat(rightPaddingLength)

    return leftPadding + string + rightPadding
}

console.log(pad('abc', 8, '_+'))
