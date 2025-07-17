// Object 타입
// key-value
// key는 중복 불가 - 문자, 숫자
// value 중복 가능 - 아무 타입 가능

const americano = {
  name: "아메리카노",
  price: 2000,
  isIce: true,
  hasShot: true,
};
// dot. 연산자
window.console.log(americano.name); // 아메리카노
window.console.log(americano.price); // 2000
window.console.log(americano.hasShot); // true

// bracket[] 연산자
window.console.log(americano["name"]); // 아메리카노
window.console.log(americano["price"]); // 2000
window.console.log(americano["hasShot"]); // true

const boardgame = {
  name: "할리갈리",
  player: 4,
  playTime: "10분",
};

const member = {
  userName: "조이레",
  age: 30,
  leftEyesight: 1.0,
  rightEyesight: 0.9,
  // eyes: {left: 1.0, right: 1.5}
};

window.console.log(member["userName"]);
