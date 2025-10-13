// 타입스크립트의 클래스

const emplott = {
  name: "John",
  age: 30,
  position: "Developer",
  work() {
    console.log("Work");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
 
  // 메서드
  work() {
    console.log("Work");
  }
}

class ExecutiveEmployee extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("Jane", 20, "Designer");
console.log(employeeB);

// 타입으로도 활용할수 있다.
const employeeC: Employee = {
  name: "John",
  age: 30,
  position: "Developer",
  work() {
    console.log("Work");
  },
};