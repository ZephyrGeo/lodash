const mean = (array) => {
    const sum = array.reduce((acc, current) => acc + current, 0)
    return sum / array.length
}

export default mean

console.log(mean([4, 2, 8, 6]))
