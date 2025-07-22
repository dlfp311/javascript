const writtenWord = window.prompt("영어 문장을 입력해주세요.");

const writtenLength = (x) => {
  return x.length;
};
const quiz = writtenWord.split(" ").map(writtenLength);

console.log(quiz);
