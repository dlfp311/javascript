const twoTimePlus = (x) => {
  return x * 2 + 10;
};
const quiz1 = [3, 6, 9, 12, 15].map(twoTimePlus);
console.log(quiz1);

const odd = (x) => {
  return x % 2 == 1 ? x * 2 : x * 3;
};
const quiz2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(odd);
console.log(quiz2);

const smallerFive = (x) => {
  return x < 5 ? 1 : 2;
};
const quiz3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(smallerFive);
console.log(quiz3);

const threeTime = (x) => {
  return x % 3 == 0 ? "💛" : "😋";
};
const quiz4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(threeTime);
console.log(quiz4);

const wordslength = (x) => {
  return x.length;
};
const quiz5 = ["apple", "mango", "juice", "kiwi", "strawberry"].map(
  wordslength
);
console.log(quiz5);
