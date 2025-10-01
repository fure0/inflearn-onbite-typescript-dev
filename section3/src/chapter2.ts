// unknown 타입

function unknownExam() {
  let a: unknown = 10;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
  
  let unknownVar: unknown;

  // 다운 캐스팅은 안됨
  // let num: number = unknownVar;
  // let str: string = unknownVar;
}

// never 타입

function neverExam() {
  function neverFunc(): never {
    throw new Error("error");
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운 캐스팅은 안됨
  // let never1: never = 10;
  // let never2: never = "hello";
  // let never3: never = true;
}

// void 타입

function voidExam() {
  function voidFunc(): void {
    console.log("hello");
    return undefined;
  }

  // 업 캐스팅이라 가능함
  let voidVar: void = undefined;
}

// any 타입

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // any 타입은 다운 캐스팅을 할수도 있고, 받아드릴 수도 있다.
  anyVar = unknownVar;
  undefinedVar = anyVar;

  // 이건 안됨
  // neverVar = anyVar;
}