// keyof 연산자

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "John",
  age: 30,
};

function getPropertyKey(obj: Person, key: keyof Person) {
  return obj[key];
}

getPropertyKey(person, "name");

type Person2 = keyof Person; // "name" | "age"