const sortedIndexOf = (arr: number[], val: number) => {
  if (arr.length === 0) return -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === val) return i;
  }
  return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr1 = [1, 2, 3, 3, 3, 4];
const arr2 = [1, 3];

// console.log(sortedIndexOf(arr2, 2));
// console.log(sortedIndexOf(arr, 1));
// console.log(sortedIndexOf(arr1, 3));

function eq(value: number | object, other: number | object) {
  return value === other || (value !== value && other !== other);
}

const object = { a: 1 };
const other = { a: 1 };

console.log(object, other);

console.log(eq(object, other));
