const kindOfBus = [
  { name: "시내버스", cost: 1200 },
  { name: "광역버스", cost: 2000 },
  { name: "마을버스", cost: 1000 },
];

const bus = window.prompt("버스 노선의 종류를 선택하시요 (정수 1~3)") - 1;
const age = window.prompt("승객의 나이는 몇살입니까?");

if (age <= 7 || age >= 65) {
  window.console.log(`${kindOfBus[bus].name} 요금 무료입니다.`);
} else if (age >= 8 && age <= 19) {
  window.console.log(
    `${kindOfBus[bus].name} 요금 ${kindOfBus[bus].cost * 0.7}`
  );
} else if (age >= 20 && age <= 64) {
  window.console.log(`${kindOfBus[bus].name} 요금 ${kindOfBus[bus].cost}`);
} else {
}
