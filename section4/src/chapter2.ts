// 함수 타입 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
// 1. 반환값의 타입이 호환되는가
// 2. 매개변수의 타입이 호환되는가

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // 업 캐스팅은 가능하다.
// b = a; 다운 캐스팅은 안된다.


// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {}
let d: D = (value) => {}

// c = d; 불가능
d = c;

type Animal = {
  name: string;
}

type Dog = {
  name: string;
  color: string;
}

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
}

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
}

// animalFunc = dogFunc;
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color);
}

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
}


// 2-2. 매개변수의 개수가 다를 때

type FuncA = (a: number, b: number) => void;
type FuncB = (a: number) => void;

let funcA: FuncA = (a, b) => {}
let funcB: FuncB = (a) => {}

funcA = funcB;
// funcB = funcA;
