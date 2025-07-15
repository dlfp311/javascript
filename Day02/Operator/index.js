//  산술 연산자
//  +, -, *, /, %(나머지), **(제곱)
const a = 1 + 3; // 4
const a1 = 2 - 3; // -1
const a2 = 2 * 4; // 8
const a3 = 3 / 3; // 1
const a4 = 2 % 3; // 2
const a5 = 2 ** 4; // 16 (2의 4제곱)

//  대입 연산자
//  =
const b = "엽기떡볶이";

//  비교 연산자  [boolean 타입으로 바뀜 → true/false로 결과값 산출]
//  >, <, ==, !=, >=, <=
const c = 5 > 3; // true
const c1 = 5 < 3; // false
const c2 = 5 >= 3; // true
const c3 = 5 <= 3; // false
const c4 = 10 == 11; // false (10이랑 11이랑 같은지 물어보는 것)
const c5 = 10 != 11; // true (10이랑 11이랑 다른지 물어보는 것)

//  논리연산
//  &&(and), ||(or), !(not)
//  &&(and) : 모두 true여야 true 산출 (모든 논리가 충족돼야 함)
//  ||(or) : 하나라도 true일 때 true 산출 (N개의 논리 중 하나라도 충족돼도 됨)

const d = 5 > 3 && 5 < 7; // true
const d1 = 1 == 2 || 2 == 4 || 3 == 3; // true
const d2 = !true; // false

//  드모르간 법칙 적용 사례
const d3 = !(5 <= 3) || !(3 > 10) / true;
const d4 = 5 > 3 && 3 < 10;

//  삼항 연산  [조건 ? 값1 : 값2]
const e = true ? "떡볶이" : "순대"; // 떡볶이
const e1 = false ? "아아" : "라떼"; // 라떼
const e2 = 5 > 3 ? "집가고싶음" : "수업함"; // "집가고싶음"
const e3 = 10 < 9 ? "고기" : "회"; // 회
