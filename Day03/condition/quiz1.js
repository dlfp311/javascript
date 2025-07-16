const angle = +window.prompt("각도를 입력해주세요. (단위 : 도)");

if (angle > 0 && angle < 90) {
  window.console.log("예각");
} else if (angle == 90) {
  window.console.log("직각");
} else if (angle > 90 && angle < 180) {
  window.console.log("둔각");
} else if (angle == 180) {
  window.console.log("평각");
} else {
}

const kor_score = +window.prompt("국어 성적 입력해주세요");
const eng_score = +window.prompt("영어 성적 입력해주세요");
const math_score = +window.prompt("수학 성적 입력해주세요");
const average = (kor_score + eng_score + math_score) / 3;

const has_100 = korscore == 100 || engscore == 100 || mathscore == 100;
const has_under_60 = korscore <= 60 || engscore <= 60 || mathscore <= 60;

if (average >= 90) {
  window.console.log("A등급");
} else if (average >= 80 && average < 90) {
  window.console.log("B등급");
} else if (average < 80) {
  window.console.log("C등급");
} else {
}

if (has_100) {
  window.console.log("Good!👍");
} else {
}
if (has_under_60) {
  window.console.log("Bad!!😅");
} else {
}

const num = +window.prompt("음료의 종류(1~3)");
const amount = +window.prompt("구매할 음료 개수");
const money = +window.prompt("투입 금액");

if (num == 1) {
  //아메리카노 3000
  const total_cost = 3000 * amount;
  if (money >= total_cost) {
    window.console.log(`아메리카노 ${amount}개,잔돈 ${money - total_cost}원`);
  } else {
    window.console.log(`잔액이 부족합니다.`);
  }
} else if (num == 2) {
  const total_cost1 = 4000 * amount;
  if (money >= total_cost1) {
    window.console.log(`레몬에이드 ${amount}개,잔돈 ${money - total_cost1}원`);
  } else {
    window.console.log(`잔액이 부족합니다.`);
  }
} else if (num == 3) {
  const total_cost2 = 3500 * amount;
  if (money >= total_cost) {
    window.console.log(`카페라떼 ${amount}개,잔돈 ${money - total_cost2}원`);
  } else {
    window.console.log(`잔액이 부족합니다.`);
  }
} else {
  window.console.log("에러임");
}
