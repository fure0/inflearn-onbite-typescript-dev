// 첫번째 사례

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap(1, "Hello");

// 두번째 사례

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

const num = returnFirstValue([1, 2, 3]);
const str = returnFirstValue(["Hello", "World"]);

// 세번째 사례
// extends는 제한을 걸어준다.
interface InterfaceA {
  length: number;
}

interface InterfaceB extends InterfaceA{} // 아래와 동일

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

const length = getLength([1, 2, 3]);
const length2 = getLength("Hello");
const length3 = getLength({ length: 10 });

console.log(length, length2, length3);