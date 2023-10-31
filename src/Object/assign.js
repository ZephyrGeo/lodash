const assign = (obj, ...sources) => {
    for (const source of sources) {
        Object.keys(source).forEach((key) => {
            obj[key] = source[key]
        })
    }
    return obj
}

export default assign

// function Foo() {
//     this.a = 1
// }

// function Bar() {
//     this.c = 3
// }

// Foo.prototype.b = 2

// Bar.prototype.d = 4
// console.log(assign({ a: 0 }, new Foo(), new Bar()))
// => { 'a': 1, 'c': 3 }
