// any

let anyVar: any = 10;
let num: number = 10;
num = anyVar;

// unknown

let unknownVar: unknown;

unknownVar = "";
unknownVar = 10;

// num = unknownVar; 에러

if (typeof unknownVar === "number") {
  num = unknownVar;
}
