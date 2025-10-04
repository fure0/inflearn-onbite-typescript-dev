// 함수 타입 정의
function func(a: number, b: number) {
  return a + b;
}

// 화살표 함수 타입 정의
const add = (a: number, b: number) => a + b;

// 함수의 매개변수
// 선택적 매개변수?는 필수매개 변수 보다 뒤에 위치해야 함
function introduce(name = "kim", age: number, tall?: number) {
  return `name: ${name}, tall: ${tall}`;
}

introduce("park", 20, 170);
introduce("lee", 20);

function getSum(...rest : number[]) {
  let sum = 0;
  rest.forEach(item => sum += item);
  return sum;
}

getSum(1, 2, 3, 4, 5);
