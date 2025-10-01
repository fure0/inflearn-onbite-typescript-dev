// 대수 타입
// 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입과 교집합 타입이 존재합니다.


// 1. 합집합 - union type (A 또는 B 또는 AB)

let a: string | number;
a = 1;
a = "hello";

let arr: (number | string)[];
arr = [1, "hello"];


type Dog = {
  name: string;
  color: string;
}

type Person = {
  name: string;
  lagunage: string;
}

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
}

let union2: Union1 = {
  name: "",
  lagunage: "",
}

let union3: Union1 = {
  name: "",
  color: "",
  lagunage: "",
}

// let union4: Union1 = {
//   name: "",
// }


// 교집합 - intersection type (AB 양쪽다 포함되어야 한다.)

let variable: number & string; // never type (있을수 없다)

type Intersection1 = Dog & Person;

let intersection1: Intersection1 = {
  name: "",
  color: "",
  lagunage: "",
}

type Intersection2 = Dog & Person;

let intersection2: Intersection2 = {
  name: "",
  color: "",
  lagunage: "",
}
