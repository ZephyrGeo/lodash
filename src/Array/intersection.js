const intersection = (...arr) => {}

// 两两求交集
//

const arr1 = [2, 1]
const arr2 = [4, 3]
let res = []

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j]) res.push(arr1[i])
    }
}
// console.log(res)

const intern = (...arr) => {}

const arr = [
    [1, 2, 3, 4],
    [4, 3],
    [4, 3],
    [7, 4],
]

const restArr = new Set(...arr)
console.log(restArr)
