const round = (number, precision = 0) => {
    if (precision === 0) {
        return Math.round(number)
    }

    const multi = 10 ** precision

    return Math.round(number * multi) / multi
}

export default round
