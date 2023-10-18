import repeat from './repeat.js'
const padEnd = (string = '', length = 0, chars = ' ') => {
    const repeatCount = Math.floor((length - string.length) / chars.length)
    const reminder = (length - string.length) % chars.length

    let rightPadding = repeat(chars, repeatCount)
    rightPadding += chars.slice(0, reminder)

    return string + rightPadding
}

export default padEnd

// console.log(padEnd('abc', 6, '_+'))
