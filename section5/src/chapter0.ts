// 인터페이스

interface Person {
  name: string;
  age?: number;
  // sayHi: () => void;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "John",
  age: 30,
  sayHi: () => {
    console.log("Hi");
  },
};
