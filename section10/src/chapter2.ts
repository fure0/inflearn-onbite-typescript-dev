// Pick<T, K>
// 특정 프로퍼티만 선택해서 새로운 타입을 만들어주는 타입

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailUrl?: string;
}

// 직접 구현해보면
type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
}

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "제목",
  content: "내용",
};

// Omit<T, K>
// 특정 프로퍼티를 제외하고 새로운 타입을 만들어주는 타입

// 직접 구현해보면
type Omit<T, K extends keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[key];
}

const omitPost: Omit<Post, "thumbnailUrl"> = {
  title: "제목",
  tags: ["1", "2", "3"],
  content: "내용",
};

// Record<K, T>
// 특정 프로퍼티를 새로운 타입으로 바꿔주는 타입

// 직접 구현해보면
type Record<K extends keyof any, T> = {
  [key in K]: T;
}

type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

type ThumbnailRecord = Record<"large" | "medium" | "small" | "watch", { url: string }>;
