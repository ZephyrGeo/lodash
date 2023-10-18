import repeat from './repeat.js'
const padStart = (string = '', length = 0, chars = ' ') => {
    const repeatCount = Math.floor((length - string.length) / chars.length)
    const reminder = (length - string.length) % chars.length

    let leftPadding = repeat(chars, repeatCount)
    leftPadding += chars.slice(0, reminder)

    return leftPadding + string
}

export default padStart

// console.log(padStart('abc', 6, '_+'))
// console.log(padStart('abc', 6))
