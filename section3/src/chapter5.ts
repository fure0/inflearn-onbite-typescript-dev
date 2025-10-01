// 타입 추론

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "John",
  profile: {
    nickname: "John",
  },
  urls: ["https://www.google.com"],
};

let { id, name, profile, urls } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();

let e: number | string;
e = 10;
e = "hello";
e.toUpperCase();

const num = 10;
const str = "hello";

let arr = [1, "string"];