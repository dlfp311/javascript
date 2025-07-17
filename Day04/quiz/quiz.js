const menu = [
  { name: "페퍼로니 피자", price: 15000 },
  { name: "치즈 피자", price: 13000 },
  { name: "불고기 피자", price: 16000 },
];

const pizza = +window.prompt("주문하실 피자 종류는?") - 1;
const amount = +window.prompt("피자 몇 판 드릴까요?");
const money = +window.prompt("투입하실 금액 입력해주세요.");

// -1 하는 이유는 리스트[]는 0부터 세기때문

if (money > menu[pizza].price * amount) {
  window.console.log(
    `${menu[pizza].name} ${amount}개, 잔돈 ${
      money - menu[pizza].price * amount
    }`
  );
} else {
  window.console.log("잔액이 부족합니다.");
}
