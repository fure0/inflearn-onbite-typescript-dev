// Partial<T>
// 부분적인, 일부분의
// 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailUrl?: string;
}

// 직접 구현해보면
type Partial<T> = {
  [key in keyof T]?: T[key];
}

// tags랑 thumbnailUrl 를 넣어야 하는데 선택적 프로퍼티가 되서 안넣어도 됨
const draft: Partial<Post> = {
  title: "제목",
  content: "내용",
};

type Required<T> = {
  [key in keyof T]-?: T[key];
}

// Required<T>
// 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
const withThumbnailPost: Required<Post> = {
  title: "제목",
  tags: ["1", "2", "3"],
  content: "내용",
  thumbnailUrl: "https://thumbnail.url",
};

// Readonly<T>
// 모든 프로퍼티를 읽기 전용 프로퍼티로 바꿔주는 타입
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
}

const readonlyPost: Readonly<Post> = {
  title: "제목",
  tags: ["1", "2", "3"],
  content: "내용",
  thumbnailUrl: "https://thumbnail.url",
};