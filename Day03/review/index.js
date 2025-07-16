const input = Number(window.prompt("정수를 입력해주세요."));
window.alert(input > 0 ? "양의 정수입니다." : "0 또는 음의 정수입니다.");

const height = Number(window.prompt("키를 입력해주세요."));
window.alert(
  height >= 140
    ? "해당 놀이기구를 탈 수 있습니다."
    : "해당 놀이기구를 탈 수 없습니다."
);

const age = +window.prompt("몇살?");
window.console.log(age >= 20 ? "성인입니다" : "미성년자입니다");

const name = String(window.prompt("당신의 이름은?"));
window.console.log(
  name == "" ? "이름을 입력해주세요." : `${name}님 안녕하세요`
);

const num = +window.prompt("숫자를 입력해주세요");
const result = num % 2 == 1 ? "홀수입니다" : "짝수입니다";
window.console.log(result);
