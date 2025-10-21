// 맵드 타입

interface User {
  id: number;
  name: string;
  age: number;
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // ... 기능
  return {
    id: 1,
    name: "John",
    age: 30,
  };
}

type PartialUser = { // 맵드 타입
  [key in keyof User]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadOnlyUser = {
  readonly [key in keyof User]: User[key];
};

function updateUser(user: PartialUser) {
  // 유저 정보를 수정하는 기능
}