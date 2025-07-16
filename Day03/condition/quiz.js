const score = +window.prompt("영어 점수를 입력해주세요.");

if (score >= 90) {
  window.console.log("A");
} else if (score >= 80 && score < 90) {
  window.console.log("B");
} else if (score >= 70 && score < 80) {
  window.console.log("C");
} else if (score >= 60 && score < 70) {
  window.console.log("D");
} else {
  window.console.log("F");
}

const num = +window.prompt("정수를 입력해주세요.");

if (num > 0 && num % 2 == 1) {
  window.console.log("양의 홀수");
} else if (num > 0 && num % 2 == 0) {
  window.console.log("양의 짝수");
} else if (num < 0 && num % 2 == -1) {
  window.console.log("음의 홀수");
} else if (num < 0 && num % 2 == 0) {
  window.console.log("음의 짝수");
} else {
  ("0");
}
