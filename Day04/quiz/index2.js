const line = +window.prompt("노선 종류(정수1~3)");
const age = +window.prompt("승객의 나이");
const section = +window.print("탑승 구간");

const subway = [
  { kind: "일반노선", price: 1250 },
  { kind: "급행노선", price: 2000 },
  { kind: "관광노선", price: 3000 },
];

const overcharge = section < 10 ? 0 : (section - 10) * 100;

if (age <= 7 || age <= 65) {
  window.console.log("요금 0원");
} else if (age >= 8 && age <= 18) {
  window.console.log(`요금 ${(subway[line].price + overcharge) * 0.6}원`);
} else {
  window.console.log(`요금 ${(subway[line].price + overcharge) * 0.6}`);
}
