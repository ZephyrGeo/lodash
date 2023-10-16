const floor = (number, precision = 0) => {
    if (precision === 0) {
        return Math.floor(number)
    }

    const multi = 10 ** precision

    return Math.floor(number * multi) / multi
}

export default floor
