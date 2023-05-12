const sortedLastIndexOf = (arr, val) => {
    // find the value in the array, if it doesn't exist return -1
    // if it does exist, return the index of the last occurence of the value
    // if there are multiple occurences of the value, return the index of the last occurence

    if (arr.length === 0) return -1
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === val) return i
    }
    return -1
}

export default sortedLastIndexOf
