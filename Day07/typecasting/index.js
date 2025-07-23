// String: String(), ""+
// Number: Number(), parseInt(), parseFloat(), +
// Boolean: Boolean(), !, 비교연산

// 1. 문자에서 배열로 바꾸기
//  1) split 함수 사용하기 "apple watch".split("")
//  2) 스프레드(...) 연산자 [..."apple watch"]

// 2. 배열에서 문자로 바꾸기
//  1) join()

const words = window.prompt("영단어를 입력해주세요.");
[...words]
  .map((x) => (x == "a" || x == "e" || x == "i" ? x.toUpperCase : x))
  .join();
