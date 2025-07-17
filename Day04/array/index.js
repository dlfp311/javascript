// array, list 타입
// 리스트를 순서대로 나열한 것?, 0부터 시작, 아무 타입이나 가능

const fruits_list = ["수박", "사과", "바나나", "오렌지", "망고"];

window.console.log(fruits_list[0]); // 수박
window.console.log(fruits_list[4]); // 망고

fruits_list[5] = "키위"; // 키위 추가
delete fruits_list[1]; // 사과 삭제

window.console.log(fruits_list);
