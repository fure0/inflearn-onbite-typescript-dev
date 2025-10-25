// 분산적인 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;
// StringNumberSwitch<number> | StringNumberSwitch<string>

let d: StringNumberSwitch<boolean | number | string>;
// StringNumberSwitch<boolean> | StringNumberSwitch<number> | StringNumberSwitch<string>

// 실용적인 예제
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<string | number | boolean, string>;
// 1단계 string | number | boolean
// 2단계 never | number | boolean
// 결과: number | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1단계 number | string | boolean
// 2단계 never | string | never
// 결과 string