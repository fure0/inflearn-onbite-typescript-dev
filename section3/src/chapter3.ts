// 기본 타입 호환성

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

// 객체 타입간의 호환성

type Animal = {
  name: string;
  color: string;
}

type Dog = {
  name: string;
  color: string;
  breed: string;
}

let animal: Animal = {
  name: "기린",
  color: "red",
}

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
}

animal = dog;
// dog = animal;

type Book = {
  name: string;
  price: number;
}

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
}

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "이펙티브 타입스크립트",
  price: 33000,
  skill: "TypeScript",
}

book = programmingBook;
// programmingBook = book;


// 초과 프로퍼티 검사
let book2: Book = {
  name: "이펙티브 타입스크립트",
  price: 33000,
  // skill: "TypeScript", 
}
