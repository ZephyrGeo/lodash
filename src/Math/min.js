const min = (array) => {
    if (!array) return []

    const new_arr = array.sort()
    return new_arr[0]
}

export default min
