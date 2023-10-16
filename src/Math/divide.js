const divide = (dividend, divisor) => {
    if (divisor === 0) {
        return dividend >= 0 ? Infinity : -Infinity
    }

    return dividend / divisor
}

export default divide
