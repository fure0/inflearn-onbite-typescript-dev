// 조건부 타입

type A = number extends string ? string : number;

type ObjA = {
  a: number;
  b: number;
};

type ObjB = {
  a: number;
  b: number;
  c: number;
};

type C = ObjA extends ObjB ? true : false; // false

// 제네릭과 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
let varB: StringNumberSwitch<string>;

function removeSpace<T>(text: T): T extends string ? string : undefined;
function removeSpace(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "") as any;
  }
  return undefined as any;
}

let result = removeSpace("Hello World");
console.log(result);

let result2 = removeSpace(undefined);
console.log(result2);