// map 메소드

const array = [1, 2, 3, 4, 5];
const newArray = array.map((item) => item * 2);
console.log(newArray); // [2, 4, 6, 8, 10]

function map<T, U>(arr: T[], callback: (item: T) => U) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(array, (item) => item * 2);
map(["hello", "world"], (item) => parseInt(item));



// forEach 메소드

const array2 = [1, 2, 3, 4, 5];
array2.forEach((item) => console.log(item));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(array2, (item) => console.log(item));