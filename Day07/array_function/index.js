const fn1 = (x) => x * 2;
const fn2 = (x) => x ** 10;
const fn3 = (x) => (x > 5 ? 1 : 2);
const fn4 = (x) => (x % 2 == 1 ? "홀수" : "짝수");

const arr = [1, 2, 3, 4, 5].map(fn1);
// = consst arr = [1,2,3,4,5].map((x) => x * 2)

// filter : 안에 있는 요소 걸러내기
// true는 남기고 false 날림
// const b1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) => x <= 5);
// // const b1 = [1,2,3,4,5]

// const quiz1 = [2, 4, 6, 8, 10].filter((x) => x % 4 == 0);
// const quiz2 = ["apple", "mango", "grage", "kixi"].filter((x) =>
//   x.includes("a")
// );
// const quiz3 = [
//   { name: "더글로리", genre: ["범죄", "사회고발", "피카레스크"] },
//   { name: "오징어게임", genre: ["범죄", "스릴러", "블랙 코미디"] },
//   { name: "폭싹 속았수다", genre: ["로맨스", "드라마", "휴먼"] },
// ].filter((x) => x.genre.includes("로맨스"));
