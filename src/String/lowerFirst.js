const lowerFirst = (string = '') => {
    const firstCharCode = string.charCodeAt(0)

    if (firstCharCode >= 97 && firstCharCode <= 122) return string
    else return string.charAt(0).toLowerCase() + string.slice(1)
}

// console.log(lowerFirst('Fred'))
// => 'fred'

// console.log(lowerFirst('FRED'))
// => 'fRED'
