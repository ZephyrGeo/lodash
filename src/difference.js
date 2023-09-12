// use filter and includes function
const difference = (arr, val) => {
    return arr.filter((item) => !val.includes(item))
}

console.log(difference([3, 2, 1], [4, 2]))