// 제네릭 인터페이스

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = { key: "key", value: 1 };
let keyPair2: KeyPair<number, string> = { key: 1, value: "value" };

// 인덱스 시그니처
interface NumberMap {
  [key: string]: number;
}

let numberMap: NumberMap = { 
  key: 1,
  key2: 2,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
  key2: "value2",
};

let booleanMap: Map<boolean> = {
  key: true,
  key2: false,
};

// 제네릭 타입 별칭

type Map2<V> = {
  [key: string]: V;
}

let stringMap2: Map2<string> = {
  key: "value",
  key2: "value2",
};

// 제네릭 인터페이스의 활용 예시
// -> 유저 관리 프로그램
// -> 유저 구분 : 학생 유저 / 개발자 유저

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T>{
  name: string;
  profile: T;
}

const developer: User<Developer> = {
  name: "developer",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

const student: User<Student> = {
  name: "student",
  profile: {
    type: "student",
    school: "school",
  },
};

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${user.name} is going to ${school}`);
}

goToSchool(student);
// goToSchool(developer);