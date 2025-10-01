// 타입 단언 (assertion)

type Person = {
  name: string;
  age: number;
}

let person = {} as Person;
person.name = "John";
person.age = 20;

type Dog = {
  name: string;
  color: string;
}

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  // breed: "진도", 초과 프로퍼티 검사에 걸림
}

let dog2: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

// 타입 단언의 규칙
// 값 as 단언 <-- 단언식
// A as B
// A가 B의 슈퍼타입 이거나
// A가 B의 서브타입 이어야 함

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string;  불가능

let num3 = 10 as unknown as string; // 다중단언, 비추천

// const 단언
let num4 = 10 as const;

let cat = {
  name: "냐옹이",
  color: "white",
} as const;

// cat.name = "냐옹이2"; 불가능


// Non Null 단언

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글",
  author: "이현수",
};

// const len: number = post.author?.length; undefined나 Null일 경우가 있으니까 불가능 
const len: number = post.author!.length; // undefined나 Null일 경우가 없다고 단언 하니가 가능