// Exclude<T, U>
// 특정 타입을 제외하고 새로운 타입을 만들어주는 타입
// T에서 U를 제외한 타입을 만들어주는 타입

// 직접 구현해보면
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<string | number | boolean, string>;
// number | boolean


// Extract<T, U>
// 특정 타입을 추출해서 새로운 타입을 만들어주는 타입
// T에서 U를 추출한 타입을 만들어주는 타입

type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | number | boolean, string>;
// string

// ReturnType<T>
// 함수의 반환 타입을 추출해서 새로운 타입을 만들어주는 타입
// T의 반환 타입을 만들어주는 타입

// 직접 구현해보면
type ReturnType<T> = T extends () => infer R ? R : never;

function funcA() {
  return "Hello";
}

function funcB() {
  return 123;
}

type C = ReturnType<typeof funcA>;
// string

type D = ReturnType<typeof funcB>;
// number