// 클래스

let studentA = {
  name: "John",
  grade: "A",
  age: 15,
  study() {
    console.log("Study");
  },
  introduce() {
    console.log("Introduce");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("Study");
  }

  introduce() {
    console.log("Introduce");
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.name} is programming ${this.favoriteSkill}`);
  }
}

const studentDeveloper = new StudentDeveloper("John", "A", 15, "JavaScript");
console.log(studentDeveloper);
studentDeveloper.programming();


let studentB = new Student("Jane", "B", 16);
console.log(studentB);
studentB.study();
studentB.introduce();