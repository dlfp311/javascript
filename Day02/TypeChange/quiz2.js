const length = window.prompt("정사각형의 한 변의 길이는?");
window.console.log(
  `한 변의 길이 ${length}인 정사각형의 넓이 = ${
    Number(length) * Number(length)
  }`
);

const width = windox.prompt("삼각형의 밑변는?");
const height = window.prompt("삼각형의 높이는?");
window.console.log(
  `밑변 ${width}, 높이 ${height}인 삼각형의 넓이 = ${
    Number(width) * Number(height)
  }`
);

const won = window.prompt("엔화로 환전할 금액은 얼마인가요?");
window.console.log(`${won}원은 ${Number(won) * 9.33}입니다!`);

const stature = window.prompt("당신의 키는?");
const weight = window.prompt("그럼 당신의 몸무게는?");
window.console.log(
  `키 : ${stature}, 몸무게 : ${weight}, BMI : ${
    Number(weight) / (Number(stature) * Number(stature))
  }`
);

const min = window.prompt("몇분?");
window.console.log(`분 : ${min}, 초 : ${Number(min) * 60} `);
