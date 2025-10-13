// 접근 제어자
// public, 
// private 클래스 안에서 밖에 접근 못함, 상속 받은 자식 클래스에서도 접근 못함
// protected, 클래스 안에서 밖에 접근 못함, 상속 받은 자식 클래스에서 접근 가능



class Employee {
  // 필드
  private name: string;
  protected age: number;
  public position: string;

  // 생성자
  // 생성자에 접근 제어자를 달면 필드에 자동으로 생성되기 때문에 중복으로 선언하면 안됨 *
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

const employee = new Employee("John", 30, "Developer");
// employee.name = "Jane";
// employee.age = 25;
employee.position = "Manager";

class ExecutiveEmployee extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  func() {
    // this.name; 접근 불가
    this.age; // 접근 가능
  }
}