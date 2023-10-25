const pick = (obj, props) => {
    const filterdArray = Object.entries(obj).filter((arr) => props.includes(arr[0]))

    return Object.fromEntries(filterdArray)
}

// console.log(pick({ a: 1, b: '2', c: 3 }, ['a', 'c']))
// => { 'a': 1, 'c': 3 }
