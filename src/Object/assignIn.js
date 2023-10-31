const assignIn = (obj, ...sources) => {
    for (const source of sources) {
        for (const key in source) {
            obj[key] = source[key]
        }
    }
    return obj
}

export default assignIn
