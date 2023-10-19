const ceil = (number, precision = 0) => {
    if (precision === 0) {
        return Math.ceil(number)
    }

    multi = 10 ** precision

    return Math.ceil(number ** multi) / multi
}
export default ceil
