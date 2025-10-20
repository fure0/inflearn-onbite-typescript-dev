// 프로미스

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
    reject("error"); // reject 는 any 타입을 넣을수 있다.
  }, 1000);
});

promise.then((response) => {
  console.log(response * 10); // 200
});

promise.catch((error) => {
  console.log(error); // error
});

// 프로미스를 반환하는 함수의 타입을 정의

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, title: "Hello", content: "World" });
    }, 1000);
  });
}

const postResult = fetchPost();

postResult.then((post) => {
  post.id;
});