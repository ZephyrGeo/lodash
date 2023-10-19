import repeat from './repeat.js'

const pad = (string = '', length = 0, chars = ' ') => {
    const paddingLength = length - string.length
    const leftPaddingLength = Math.floor(paddingLength / 2)
    const rightPaddingLength = Math.ceil(paddingLength / 2)

    const padding = (paddingLength) => {
        const repeatCount = Math.floor(paddingLength / chars.length)
        const reminder = paddingLength % chars.length

        const pad = repeat(chars, repeatCount) + chars.slice(0, reminder)
        return pad
    }

    const leftPadding = padding(leftPaddingLength)
    const rightPadding = padding(rightPaddingLength)

    return leftPadding + string + rightPadding
}

console.log(pad('abc', 8, '_+'))
