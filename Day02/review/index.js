const day = window.prompt("오늘은 무슨 요일인가요?");
const time = window.prompt("지금은 몇시인가요?");
window.alert(`오늘은 ${day}요일이고, 지금은 ${time} 입니다!`);

const name = window.prompt("당신의 이름은 무엇인가요?");
const firstfood = window.prompt("당신의 최애 음식은?");
const secondfood = window.prompt("당신의 차애 음식은?");
const thirdfood = window.prompt("그다음 차애 음식은?");
window.console.log(
  `${name}님이 좋아하는 음식 순서는 다음과 같다. 1. ${firstfood}, 2.${secondfood}, 3. ${thirdfood}`
);
