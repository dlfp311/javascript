const squared = (x) => {
  return x ** 2;
};
const quiz1 = [1, 2, 3, 4].map(squared);
console.log(quiz1);

const upper = (x) => {
  return x.toUpperCase();
};
const quiz2 = ["hong", "kim", "lee"].map(upper);
console.log(quiz2);

const under60 = (x) => {
  return x > 60 ? "합격" : "불합격";
};
const quiz3 = [85, 42, 77].map(under60);
console.log(quiz3);

const sale = (x) => {
  return x * 0.8;
};
const quiz4 = [10000, 20000, 15000].map(sale);
console.log(quiz4);

const names = (x) => {
  return x.name;
};

const quiz5 = [
  { name: "홍길동", age: 30 },
  { name: "김철수", age: 18 },
].map(names);
