// 인덱스드 엑세스 타입

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  }
}[];

const post: PostList[0] = {
  title: "제목",
  content: "내용",
  author: {
    id: 1,
    name: "이름",
  },
};

function printAuthorInfo(author: PostList[number]['author']) {
  console.log(`${author.name} (${author.id})`);
}

printAuthorInfo(post.author);


type Tuple = [number, string, boolean];

type Tup0 = Tuple[0];
type Tup1 = Tuple[1];
type Tup2 = Tuple[2];

type Tuples = Tuple[number]; // number | string | boolean