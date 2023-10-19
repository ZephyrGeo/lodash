const mean = (array) => {
    const sum = array.reduce((acc, current) => acc + current, 0)
    return sum / array.length
}

export default mean
